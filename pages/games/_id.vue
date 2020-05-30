<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-if="!loading" class="grid grid-cols-3 m-12">
      <div>
        <div class="relative pb-9/16">
          <div
            class="h-16 rounded-t-lg w-5/6 bg-gray-900 flex items-center justify-around"
          >
            <div>
              <button
                class="h-8 w-24 rounded-full bg-teal-500 hover:bg-teal-700 active:bg-teal-800 focus:outline-none focus:shadow-outline text-sm"
              >
                <i class="fas fa-play mr-1"></i>
                Trailer
              </button>
            </div>
            <div>
              <button
                class="h-8 w-24 rounded-full bg-gray-700 focus:outline-none focus:shadow-outline text-sm"
              >
                <i class="fas fa-gift mr-1"></i> Wishlist
              </button>
            </div>
            <div>
              <button
                class="h-8 w-24 rounded-full bg-gray-700 focus:outline-none focus:shadow-outline text-sm"
              >
                <i class="fas fa-plus mr-1"></i> Favourite
              </button>
            </div>
          </div>
          <img
            :src="game.background_image"
            class="absolute h-5/6 w-5/6 rounded-b-lg object-fit"
            alt=""
          />
        </div>
      </div>
      <div class="ml-8" style="margin-left: -24px">
        <h1 class="text-4xl font-bold">{{ game.name }}</h1>
        <div class="flex">
          <h3 class="text-2xl font-light">{{ game.released }}</h3>
        </div>
        <h3
          v-for="genre in game.genres"
          :key="genre.id"
          class="text-2xl font-light"
        >
          {{ genre.name }}
        </h3>
        <h2 class="font-bold text-3xl">About</h2>
        <p v-html="game.description" class="text-xl"></p>
      </div>
      <div class="ml-12">
        <h1 class="text-3xl font-bold mb-4">Where to play?</h1>
        <div
          v-for="store in game.stores"
          :key="store.id"
          class="relative flex items-center rounded-md bg-gray-700 hover:bg-gray-600 h-12 w-64 mb-2"
        >
          <i class="text-2xl fab fa-steam pl-3"></i>
          <span class="pl-3 font-semibold">
            {{ store.store.name }}
          </span>
          <span class="absolute xl:right-0 pr-4">
            $30,99
          </span>
        </div>
        <h1 class="text-3xl mt-10 font-bold">Rating</h1>
        <div class="flex mt-4 w-4/5">
          <div
            :style="{ width: game.ratings[0].percent + '%' }"
            class="rounded-l-full bg-green-600 opacity-50 hover:opacity-100  h-10  text-center"
          >
            <h3 class="justify-center" v-if="hover">
              {{ game.ratings[0].percent }}%
            </h3>
          </div>
          <div
            :style="{ width: game.ratings[1].percent + '%' }"
            class="bg-blue-600 opacity-50 hover:opacity-100  h-10"
          ></div>
          <div
            :style="{ width: game.ratings[2].percent + '%' }"
            class="bg-yellow-600 opacity-50 hover:opacity-100 h-10"
          ></div>
          <div
            :style="{ width: game.ratings[3].percent + '%' }"
            class="rounded-r-full bg-red-600 hover:opacity-100 opacity-50 h-10"
          ></div>
        </div>
        <div
          class="items-center justify-start mt-4 grid grid-rows-2 grid-flow-col gap-4"
        >
          <div
            class="rounded-lg h-10 w-48 bg-green-600 flex flex-col justify-center text-center"
          >
            Awesome 😲
          </div>
          <div
            class="rounded-lg h-10 w-48 bg-yellow-600 flex flex-col justify-center text-center"
          >
            Meh 😑
          </div>
          <div
            class="rounded-lg h-10 w-48 bg-blue-600 flex flex-col justify-center text-center"
          >
            Good 👍
          </div>
          <div
            class="rounded-lg h-10 w-48 bg-red-600 flex flex-col justify-center text-center"
          >
            Yuck 🤮
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { createRouter } from '../.nuxt/router'
import _ from 'lodash'
export default {
  name: 'GameDetailsComponent',
  props: ['name'],
  data() {
    return {
      game: null,
      loading: true
    }
  },
  validate({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  },
  mounted() {
    this.$api.games
      .show(this.$route.params.id)
      .then((res) => {
        console.log(res)
        if (_.isEmpty(res)) {
          console.log('test')
          return this.$router.push('/')
        }
        this.game = res
      })
      .finally(() => (this.loading = false))
  }
}
</script>

<style scoped></style>
