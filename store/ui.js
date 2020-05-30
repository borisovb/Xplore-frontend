export const state = () => ({
  waitingForResponse: false
})

export const mutations = {
  SET_WAITING_FOR_RESPONSE(state, bool) {
    state.waitingForResponse = bool
  }
}
export const actions = {
  setWaitingForResponse({ commit }, bool) {
    commit('SET_WAITING_FOR_RESPONSE', bool)
  }
}

export const getters = {}
