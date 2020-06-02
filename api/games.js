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
  },
  search(searchQuery, platforms, genres, orederBy) {
    let url = `/${resource}/search?search=${searchQuery}`
    if (platforms.length >= 1) {
      url += '&platforms='
      platforms.forEach((platform, index) => {
        url += `${platform}`
        if (index !== platforms.length - 1) {
          url += ','
        }
      })
    }
    if (genres.length >= 1) {
      url += '&genres='
      genres.forEach((genre, index) => {
        url += `${genre}`
        if (index !== genres.length - 1) {
          url += ','
        }
      })
    }
    if (orederBy) {
      url += `&ordering=${orederBy}`
    }

    return $axios.$get(url)
  },
  searchGetMore(url) {
    return $axios.$get(url)
  }
})
