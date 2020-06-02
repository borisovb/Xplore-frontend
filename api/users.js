const resource = 'users'

export default ($axios) => ({
  signup(username, email, password) {
    return $axios.$post(`/${resource}/`, { username, password, email })
  },
  login(username, password) {
    return $axios.$post(`/${resource}/login/`, { username, password })
  },
  me() {
    return $axios.$get(`/${resource}/me`)
  },
  addToFavorites(username, game) {
    return $axios.$post(`/${resource}/${username}/favorites/`, game)
  },
  addToWishlist(username, game) {
    return $axios.$post(`/${resource}/${username}/wishlist/`, game)
  },
  removeFromFavorites(username, id) {
    return $axios.$delete(`/${resource}/${username}/favorites/`, {
      data: { id }
    })
  },
  removeFromWishlist(username, id) {
    return $axios.$delete(`/${resource}/${username}/wishlist/`, {
      data: { id }
    })
  }
})
