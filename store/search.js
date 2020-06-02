import _ from 'lodash'

export const state = () => ({
  results: null,
  nextPageEndpoint: null,
  filtersModal: false,
  platforms: [
    {
      id: 1,
      name: 'PC',
      selected: false
    },
    {
      id: 2,
      name: 'PlayStation',
      selected: false
    },
    {
      id: 3,
      name: 'Xbox',
      selected: false
    },
    {
      id: 4,
      name: 'iOS',
      selected: false
    },
    {
      id: 8,
      name: 'Android',
      selected: false
    },
    {
      id: 5,
      name: 'Apple Macintosh',
      selected: false
    },
    {
      id: 6,
      name: 'Linux',
      selected: false
    },
    {
      id: 7,
      name: 'Nintendo',
      selected: false
    },
    {
      id: 9,
      name: 'Atari',
      selected: false
    },
    {
      id: 11,
      name: 'SEGA',
      selected: false
    },
    {
      id: 14,
      name: 'Web',
      selected: false
    }
  ],
  genres: [
    {
      id: 4,
      name: 'Action',
      selected: false
    },
    {
      id: 51,
      name: 'Indie',
      selected: false
    },
    {
      id: 3,
      name: 'Adventure',
      selected: false
    },
    {
      id: 5,
      name: 'RPG',
      selected: false
    },
    {
      id: 10,
      name: 'Strategy',
      selected: false
    },
    {
      id: 2,
      name: 'Shooter',
      selected: false
    },
    {
      id: 40,
      name: 'Casual',
      selected: false
    },
    {
      id: 14,
      name: 'Simulation',
      selected: false
    },
    {
      id: 7,
      name: 'Puzzle',
      selected: false
    },
    {
      id: 11,
      name: 'Arcade',
      selected: false
    },
    {
      id: 83,
      name: 'Platformer',
      selected: false
    },
    {
      id: 1,
      name: 'Racing',
      selected: false
    },
    {
      id: 15,
      name: 'Sports',
      selected: false
    },
    {
      id: 59,
      name: 'Massively Multiplayer',
      selected: false
    },
    {
      id: 19,
      name: 'Family',
      selected: false
    },
    {
      id: 6,
      name: 'Fighting',
      selected: false
    },
    {
      id: 28,
      name: 'Board Games',
      selected: false
    },
    {
      id: 17,
      name: 'Card',
      selected: false
    },
    {
      id: 34,
      name: 'Educational',
      selected: false
    }
  ],
  orderBy: null
})

export const mutations = {
  SET_RESULTS(state, payload) {
    state.results = payload.results
    state.nextPageEndpoint = payload.next
  },
  LOAD_MORE(state, payload) {
    state.results = _.unionBy(state.results, payload.results, 'id')
    state.nextPageEndpoint = payload.next
  },
  SET_FILTERS_MODAL(state, bool) {
    state.filtersModal = bool
  },
  SET_SELECTED_PLATFORM(state, { id, bool }) {
    state.platforms.find((p) => p.id === id).selected = bool
  },
  SET_SELECTED_GENRE(state, { id, bool }) {
    state.genres.find((p) => p.id === id).selected = bool
  },
  SET_ORDER_BY(state, orderBy) {
    state.orderBy = orderBy
  }
}
export const actions = {
  async getSearchResults({ state, commit }, searchQuery) {
    const platforms = state.platforms.reduce((ids, platform) => {
      if (platform.selected) {
        ids.push(platform.id)
      }
      return ids
    }, [])
    const genres = state.genres.reduce((ids, genre) => {
      if (genre.selected) {
        ids.push(genre.id)
      }
      return ids
    }, [])
    const payload = await this.$api.games.search(
      searchQuery,
      platforms,
      genres,
      state.orderBy
    )
    commit('SET_RESULTS', payload)
  },
  async loadMore({ state, commit }) {
    const payload = await this.$api.games.searchGetMore(state.nextPageEndpoint)
    commit('LOAD_MORE', payload)
  },
  toggleFilters({ commit }, bool) {
    commit('SET_FILTERS_MODAL', bool)
  },
  setSelectedPlatform({ commit }, { id, bool }) {
    commit('SET_SELECTED_PLATFORM', { id, bool })
  },
  setSelectedGenre({ commit }, { id, bool }) {
    commit('SET_SELECTED_GENRE', { id, bool })
  },
  setOrderBy({ commit }, orderBy) {
    commit('SET_ORDER_BY', orderBy)
  }
}

export const getters = {
  canLoadMore: (state) =>
    state.nextPageEndpoint !== '' && state.nextPageEndpoint !== null
}
