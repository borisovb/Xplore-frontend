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
  }
})
