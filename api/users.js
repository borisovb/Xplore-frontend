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
  getUser(username) {
    return $axios.$get(`/${resource}/${username}`)
  },
  getUserFavorites(username) {
    return $axios.$get(`/${resource}/${username}/favorites/`)
  },
  getUserWishlist(username) {
    return $axios.$get(`/${resource}/${username}/wishlist/`)
  },
  getUserFriends(username) {
    return $axios.$get(`/${resource}/${username}/friends/`)
  },
  addToFavorites(username, game) {
    return $axios.$post(`/${resource}/${username}/favorites/`, game)
  },
  addToWishlist(username, game) {
    return $axios.$post(`/${resource}/${username}/wishlist/`, game)
  },
  addFriendToFriendsList(username, friendUsername) {
    return $axios.$post(`/${resource}/${username}/friends/`, {
      username: friendUsername
    })
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
  },
  removeFriendFromFriendsList(username, friendUsername) {
    return $axios.$delete(`/${resource}/${username}/friends/`, {
      data: { username: friendUsername }
    })
  }
})
