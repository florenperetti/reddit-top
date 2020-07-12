import { fetchTopPosts } from '../../api/redditApi'
import Vue from 'vue'

const ampRegexp = /&amp;/g

const state = {
  after: null,
  current: null,
  all: [],
  watched: {},
  dismissed: {}
}

const getters = {
  getPostsToShow: (state, getters, rootState) => {
    return state.all.reduce((acc, curr) => {
      if (state.dismissed[curr.name]) {
        return acc
      }
      curr.read = !!state.watched[curr.name]
      acc.push(curr)
      return acc
    }, [])
  },
  getPostsToShowCount: (state, getters) => {
    return getters.getPostsToShow.length
  }
}

const actions = {
  async fetchPosts ({ commit, state, dispatch }, paginated) {
    try {
      let params
      if (paginated) {
        params = {
          after: state.after,
          limit: 10
        }
      }
      const response = await fetchTopPosts(params)
      const posts = response.data.children.reduce((acc, item) => {
        // eslint-disable-next-line camelcase
        const { title, thumbnail, author, name, num_comments, created_utc, preview } = item.data

        if (state.dismissed[name]) {
          return acc
        }

        let image = ''

        if (preview && preview.images && preview.images[0]) {
          image = preview.images[0].source.url.replace(ampRegexp, '&')
        }

        acc.push({
          title,
          thumbnail,
          image,
          author,
          name,
          num_comments,
          created_utc,
          read: false
        })
        return acc
      }, [])
      if (paginated) {
        commit('APPEND_POSTS', posts)
      } else {
        commit('SET_ALL_POSTS', posts)
      }
      if (posts.length > 0) {
        commit('SET_AFTER', posts[posts.length - 1].name)
      } else {
        dispatch('fetchPosts', true)
      }
    } catch (error) {
      console.error(error)
    }
  },
  dismissPost ({ commit }, name) {
    commit('SET_DISSMISSED_POST', name)
  },
  dismissAllPosts ({ commit }) {
    commit('DISSMISS_ALL_POSTS')
  },
  viewPost ({ commit }, post) {
    commit('SET_CURRENT_POST', post)
    commit('SET_READ_POST', post.name)
  }
}

const mutations = {
  SET_ALL_POSTS (state, posts) {
    state.all = posts
  },
  APPEND_POSTS (state, posts) {
    state.all = [...state.all, ...posts]
  },
  SET_DISSMISSED_POST (state, postName) {
    Vue.set(state.dismissed, postName, true)
  },
  DISSMISS_ALL_POSTS (state) {
    state.dismissed = {
      ...state.dismissed,
      ...state.all.reduce((acc, post) => {
        acc[post.name] = true
        return acc
      }, {})
    }
  },
  SET_CURRENT_POST (state, post) {
    state.current = post
  },
  SET_READ_POST (state, postName) {
    Vue.set(state.watched, postName, true)
  },
  SET_AFTER (state, postName) {
    state.after = postName
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
