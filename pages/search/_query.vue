<template>
  <div class="my-10">
    <FilterModal v-if="filtersModal" @filtersChanged="search"></FilterModal>
    <div class="block md:flex h-auto px-10 mb-5">
      <div class="text-3xl font-normal">
        <i class="fas fa-dice-d6 text-gray-600"></i> Search Results
      </div>

      <div class="flex content-between ml-auto mt-2 md:mt-0">
        <div
          class="bg-gray-700 hover:bg-gray-600 w-full md:w-auto rounded-lg p-5 cursor-pointer text-white shadow-md"
          @click="showFiltersModal"
        >
          <i class="fas fa-filter"></i> Filter
        </div>
        <OrderByDropdown @orderChanged="search"></OrderByDropdown>
      </div>
    </div>

    <div
      v-if="results !== null && results.length === 0"
      class="w-full text-center"
    >
      <div class="text-3xl text-gray-500">NO GAMES FOUND</div>
    </div>

    <div class="flex flex-wrap px-5">
      <div
        v-for="game in results"
        :key="game.id"
        class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 my-2"
        style="height: 280px"
      >
        <GameCard :game="game"></GameCard>
      </div>
    </div>
    <infinite-loading spinner="waveDots" @infinite="infiniteHandler">
      <div slot="no-more"></div>
      <div slot="no-results"></div>
    </infinite-loading>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import GameCard from '~/components/GameCard'
import OrderByDropdown from '~/components/OrderByDropdown'
import FilterModal from '~/components/FiltersModal'
export default {
  components: {
    GameCard,
    OrderByDropdown,
    FilterModal
  },
  watch: {
    '$route.params.query'(query) {
      this.search()
    }
  },
  computed: {
    ...mapState('search', ['results', 'filtersModal']),
    ...mapGetters('search', ['canLoadMore'])
  },
  mounted() {
    this.search()
  },
  methods: {
    ...mapActions('search', ['getSearchResults', 'loadMore', 'toggleFilters']),
    showFiltersModal() {
      this.toggleFilters(true)
    },
    search() {
      this.getSearchResults(this.$route.params.query)
    },
    async infiniteHandler($state) {
      if (this.canLoadMore) {
        await this.loadMore()
        $state.loaded()
      } else {
        $state.complete()
      }
    }
  }
}
</script>

<style></style>
