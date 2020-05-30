export const state = () => ({
  token: null,
  user: null
})

export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  },
  SET_USER(state, payload) {
    state.user = payload
  },
  REMOVE_USER_TOKEN(state) {
    state.token = null
    state.user = null
  }
}
export const actions = {
  async login({ commit }, { username, password }) {
    const { token } = await this.$api.users.login(username, password)
    this.$axios.setToken(token, 'Token')
    const { username: name, email } = await this.$api.users.me()
    commit('SET_TOKEN', token)
    commit('SET_USER', { name, email })
  },
  logout({ commit }) {
    commit('REMOVE_USER_TOKEN')
  }
}

export const getters = {}
