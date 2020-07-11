import { fetchTopPosts } from '../../api/redditApi'
import Vue from 'vue'

const state = {
  after: null,
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
      // TODO set watched
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
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
