<template>
  <div>
    <loading
      :active="loading"
      :can-cancel="false"
      loader="dots"
      :opacity="1"
      color="#58A4B0"
      background-color="#373f51"
    ></loading>

    <div v-if="!loading">
      <div class="grid grid-cols-10 px-10 py-10">
        <div class="col-span-10 md:col-span-4 lg:col-span-3 pr-5">
          <div
            class="rounded-t-lg shadow-xl"
            :style="{
              background:
                ' url(\'' +
                game.background_image +
                '\') no-repeat center center',
              backgroundSize: 'cover',
              height: '50vh',
              'max-height': '850px'
            }"
          ></div>
          <div
            class="h-16 rounded-b-lg bg-custom shadow-xl flex items-center justify-around"
          >
            <Btn v-if="game.clip !== null" highlighted @click="showVideo">
              <i class="fas fa-play"></i> Video
            </Btn>
            <Btn> <i class="fas fa-plus"></i> Favorite </Btn>
            <Btn> <i class="fas fa-gift"></i> Wishlist </Btn>
          </div>
        </div>

        <div class="col-span-10 md:col-span-6 lg:col-span-4">
          <h1 class="text-4xl font-bold">{{ game.name }}</h1>
          <div class="flex">
            <p class="text-lg font-light">
              {{ game.released }}
              <i
                v-for="platform in game.parent_platforms"
                :key="platform.id"
                class="mx-1"
                :class="platformIcons[platform.platform.name]"
              />
            </p>
          </div>
          <a
            v-for="(genre, index) in game.genres"
            :key="genre.id"
            class="text-lg font-light"
          >
            {{ genre.name }}
            <a v-show="index !== game.genres.length - 1">,</a>
          </a>
          <h2 class="font-bold text-2xl mt-3">About</h2>
          <p class="text-md" v-html="game.description"></p>
        </div>

        <div class="col-span-10 sm:pt-5 lg:col-span-3 lg:pl-5">
          <p class="text-2xl font-bold mb-4">Where to play?</p>

          <div
            v-for="store in game.stores"
            :key="store.id"
            class="flex items-center rounded-md bg-gray-700 hover:bg-gray-600 h-12 w-64 mb-2"
            :class="{
              'cursor-pointer': store.url !== null && store.url !== ''
            }"
            @click="goToStore(store.url)"
          >
            <i class="text-2xl pl-3" :class="storeIcons[store.store.name]"></i>
            <span class="pl-3 font-semibold cursor-pointer">
              {{ store.store.name }}
            </span>

            <!-- <span class="absolute xl:right-0 pr-4">
            $30,99
          </span> -->
          </div>

          <p class="text-2xl mt-10 font-bold">Rating</p>
          <div class="flex mt-4 w-full">
            <div
              :style="{
                width: (game.ratings[0] ? game.ratings[0].percent : 0) + '%'
              }"
              class="rounded-l-full bg-green-600 opacity-50 hover:opacity-100  h-10  text-center"
            ></div>
            <div
              :style="{
                width: (game.ratings[1] ? game.ratings[1].percent : 0) + '%'
              }"
              class="bg-blue-600 opacity-50 hover:opacity-100  h-10"
            ></div>
            <div
              :style="{
                width: (game.ratings[2] ? game.ratings[2].percent : 0.1) + '%'
              }"
              class="bg-yellow-600 opacity-50 hover:opacity-100 h-10"
            ></div>
            <div
              :style="{
                width: (game.ratings[3] ? game.ratings[3].percent : 0.1) + '%'
              }"
              class="rounded-r-full bg-red-600 hover:opacity-100 opacity-50 h-10"
            ></div>
          </div>
          <div class="flex flex-wrap mt-1 w-full">
            <div
              class="rounded-lg h-10 w-auto bg-green-600 flex flex-col justify-center text-center mx-2 my-2 px-5"
            >
              😲 Awesome
            </div>
            <div
              class="rounded-lg h-10 w-auto bg-yellow-600 flex flex-col justify-center text-center mx-2 my-2 px-5"
            >
              😑 Meh
            </div>
            <div
              class="rounded-lg h-10 w-auto bg-blue-600 flex flex-col justify-center text-center mx-2 my-2 px-5"
            >
              👍 Good
            </div>
            <div
              class="rounded-lg h-10 w-auto bg-red-600 flex flex-col justify-center text-center mx-2 my-2 px-5"
            >
              🤮 Yuck
            </div>
          </div>
        </div>
      </div>
      <div class="my-12">
        <div class="text-3xl font-normal px-12 mb-5">
          <i class="fas fa-puzzle-piece text-gray-600"></i> Similar Games
        </div>
        <GameCardsSlider :games="similar" />
      </div>
      <modal
        v-if="game.clip !== null"
        name="video"
        transition="pop-out"
        height="auto"
        :adaptive="true"
      >
        <video controls>
          <source :src="game.clip.clip" type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
      </modal>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import _ from 'lodash'
import GameCardsSlider from '~/components/GameCardsSlider'

export default {
  name: 'GameDetails',
  components: { GameCardsSlider },
  data() {
    return {
      game: null,
      similar: null,
      loading: true
    }
  },
  computed: {
    ...mapState('icons', ['platformIcons', 'storeIcons'])
  },
  validate({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  },
  async mounted() {
    try {
      const game = await this.$api.games.show(this.$route.params.id)
      const similar = await this.$api.games.recommendations(
        this.$route.params.id
      )
      if (_.isEmpty(game)) {
        return this.$router.push('/404')
      }
      this.game = game
      this.similar = similar
    } catch (error) {
      this.$router.push('/404')
      console.log(error)
    } finally {
      this.loading = false
    }
  },
  methods: {
    goToStore(url) {
      if (url !== null && url !== '') {
        window.open(url, '_blank')
      }
    },
    showVideo() {
      this.$modal.show('video')
    }
  }
}
</script>

<style scoped>
.bg-custom {
  background: #1b1b1e;
}
</style>
