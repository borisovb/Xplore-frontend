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
  async setRecommended({ commit, rootState }) {
    const len = rootState.auth.favorites.length
    let id = 4200
    if (len >= 1) {
      id = rootState.auth.favorites[len - 1].id
    }
    const games = await this.$api.games.recommendations(id)
    commit('SET_RECOMMENDED', games)
  },

  loadGames({ dispatch }) {
    dispatch('setTrending')
    dispatch('setRecommended')
  }
}

export const getters = {}
