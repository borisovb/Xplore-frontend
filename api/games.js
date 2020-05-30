const resource = 'games'

export default ($axios) => ({
  trending() {
    const url = `/${resource}/trending`
    return $axios.$get(url)
  },
  recommendations(id) {
    return $axios.$get(`/${resource}/recommendations/${id}`)
  },
  show(id) {
    return $axios.$get(`/${resource}/${id}`)
  }

  // create(payload) {
  //   return $axios.$post(`/${resource}`, payload, {
  //     headers: {
  //       'Content-Type': 'multipart/form-data'
  //     }
  //   })
  // },
  // update(payload, id) {
  //   return $axios.$patch(`/${resource}/${id}`, payload)
  // },

  // delete(id) {
  //   return $axios.$delete(`/${resource}/${id}`)
  // }
})
