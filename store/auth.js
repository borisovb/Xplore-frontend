export const state = () => ({
  token: null,
  user: null,
  favorites: [],
  wishlist: [],
  friends: [],
  loginModal: false,
  signUpModal: false
})

export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  },
  SET_USER(state, accInfo) {
    state.user = {
      name: accInfo.name,
      email: accInfo.email,
      profilePicture: accInfo.profilePicture
    }
    state.favorites = accInfo.favorites.games
    state.wishlist = accInfo.wishlist.games
    state.friends = accInfo.friends.friends
  },
  REMOVE_USER_TOKEN(state) {
    state.token = null
    state.user = null
  },
  ADD_TO_FAVORITES(state, gameObj) {
    state.favorites.push(gameObj)
  },
  ADD_TO_WISHLIST(state, gameObj) {
    state.wishlist.push(gameObj)
  },
  REMOVE_FROM_FAVORITES(state, id) {
    state.favorites = state.favorites.filter((f) => f.id !== id)
  },
  REMOVE_FROM_WISHLIST(state, id) {
    state.wishlist = state.wishlist.filter((w) => w.id !== id)
  },
  SET_LOGIN_MODAL(state, bool) {
    state.loginModal = bool
  },
  SET_SIGNUP_MODAL(state, bool) {
    state.signUpModal = bool
  }
}
export const actions = {
  async login({ commit }, { username, password }) {
    const { token } = await this.$api.users.login(username, password)
    commit('SET_TOKEN', token)
    this.$axios.setToken(token, 'Token')
    const {
      user,
      favorites,
      wishlist,
      friends,
      profilePicture
    } = await this.$api.users.me()

    const accInfo = {
      name: user.username,
      email: user.email,
      profilePicture: profilePicture.image,
      favorites,
      wishlist,
      friends
    }
    console.log(accInfo)
    commit('SET_USER', accInfo)
  },
  logout({ commit }) {
    commit('REMOVE_USER_TOKEN')
  },
  async addToFavorites({ state, commit }, game) {
    const gameObj = {
      id: game.id,
      name: game.name,
      poster_url: game.background_image
    }
    await this.$api.users.addToFavorites(state.user.name, gameObj)
    commit('ADD_TO_FAVORITES', gameObj)
  },
  async addToWishlist({ state, commit }, game) {
    const gameObj = {
      id: game.id,
      name: game.name,
      poster_url: game.background_image
    }
    await this.$api.users.addToWishlist(state.user.name, gameObj)
    commit('ADD_TO_WISHLIST', gameObj)
  },
  async removeFromFavorites({ state, commit }, id) {
    await this.$api.users.removeFromFavorites(state.user.name, id)
    commit('REMOVE_FROM_FAVORITES', id)
  },
  async removeFromWishlist({ state, commit }, id) {
    await this.$api.users.removeFromWishlist(state.user.name, id)
    commit('REMOVE_FROM_WISHLIST', id)
  },
  toggleLoginModal({ state, commit }, bool) {
    commit('SET_LOGIN_MODAL', bool)
  },
  toggleSignUpModal({ commit }, bool) {
    commit('SET_SIGNUP_MODAL', bool)
  }
}

export const getters = {}
