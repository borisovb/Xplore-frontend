export const state = () => ({
  trending: [],
  recommended: []
})

export const mutations = {
  SET_TRENDING(state, payload) {
    state.trending = payload
  },
  SET_RECOMMENDED(state, payload) {
    state.recommended = payload
  }
}
export const actions = {
  async setTrending({ commit }) {
    const games = await this.$api.games.trending()
    commit('SET_TRENDING', games)
  },
  setRecommended({ commit }) {},

  loadGames({ dispatch }) {
    dispatch('setTrending')
    dispatch('setRecommended')
  }
}

export const getters = {}
