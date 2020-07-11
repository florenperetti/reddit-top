import { fetchTopPosts } from '../../api/redditApi'

const state = {
  after: null,
  all: [],
  watched: {},
  dismissed: {}
}

const getters = {
  getPostsToShow: (state, getters, rootState) => {
    return state.all // TODO set watched and remove dismissed
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
  }
}

const mutations = {
  SET_ALL_POSTS (state, posts) {
    state.all = posts
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
