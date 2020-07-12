import { fetchTopPosts } from '../../api/redditApi'
import Vue from 'vue'

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
      if (state.dismissed[curr.data.name]) {
        return acc
      }
      curr.data.read = !!state.watched[curr.data.name]
      acc.push(curr)
      return acc
    }, [])
  }
}

const actions = {
  async fetchPosts ({ commit }) {
    try {
      const response = await fetchTopPosts()
      commit('SET_ALL_POSTS', response.data.children)
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
  SET_DISSMISSED_POST (state, postName) {
    Vue.set(state.dismissed, postName, true)
  },
  DISSMISS_ALL_POSTS (state) {
    state.dismissed = {
      ...state.dismissed,
      ...state.all.reduce((acc, post) => {
        acc[post.data.name] = true
        return acc
      }, {})
    }
  },
  SET_CURRENT_POST (state, post) {
    state.current = post
  },
  SET_READ_POST (state, postName) {
    Vue.set(state.watched, postName, true)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
