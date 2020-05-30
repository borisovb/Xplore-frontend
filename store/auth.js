export const state = () => ({
  token: null,
  user: null
})

export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  },
  SET_USER(state, user) {
    state.user = user
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
    const {
      user,
      favorites,
      wishlist,
      friends,
      profilePicture
    } = await this.$api.users.me()
    commit('SET_TOKEN', token)
    const accInfo = {
      name: user.username,
      email: user.email,
      favorites,
      wishlist,
      friends,
      profilePicture
    }
    commit('SET_USER', accInfo)
  },
  logout({ commit }) {
    commit('REMOVE_USER_TOKEN')
  }
}

export const getters = {}
