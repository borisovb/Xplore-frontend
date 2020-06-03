<template>
  <div class="w-screen h-screen flex justify-around items-center">
    <div
      class="container max-w-xs rounded-lg overflow-hidden shadow-lg my-2 bg-white"
    >
      <div class="relative mb-6">
        <img
          class="w-full"
          src="https://unsplash.com/photos/PElJMFWV3kk/download?force=true&w=640"
          alt="Profile picture"
        />
        <div class="text-center absolute w-full" style="bottom: -30px">
          <div class="mb-10">
            <p class="text-white tracking-wide uppercase text-lg font-bold">
              Witch
            </p>
            <p class="text-gray-400 text-sm">@witch_forever</p>
          </div>
          <button
            id="but"
            class="p-4 rounded-full transition ease-in duration-200 focus:outline-none"
          >
            <svg
              viewBox="0 0 20 20"
              enable-background="new 0 0 20 20"
              class="w-6 h-6"
            >
              <path
                fill="#FFFFFF"
                d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                     C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                     C15.952,9,16,9.447,16,10z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="py-10 px-6 text-center tracking-wide grid grid-cols-3 gap-6">
        <div class="posts">
          <p class="text-gray-800">10</p>
          <p class="text-black text-m">Favorite</p>
        </div>
        <div class="followers">
          <p class="text-gray-800">24</p>
          <p class="text-black text-m">Wishlist</p>
        </div>
        <div class="following">
          <p class="text-gray-800">62</p>
          <p class="text-black text-m">Friends</p>
        </div>
      </div>
    </div>
    <div class="container w-1/2 sm:w-auto md:w-full lg:w-32 xl:w-3/4">
      <div
        class="container rounded-lg overflow-hidden shadow-lg my-4 mx-6 bg-black"
      >
        <div class="text-3xl font-normal mx-6 mb-5 mt-8">
          <i class="fas fa-user-check text-gray-600"></i> Wishlist
        </div>
        <GameCardsSlider :games="recommended" />
      </div>
      <div
        class="container rounded-lg overflow-hidden shadow-lg my-4 mx-6 bg-black"
      >
        <div class="text-3xl font-normal mx-6 mb-5 mt-8">
          <i class="fas fa-chart-line text-gray-600"></i> Favorite
        </div>
        <GameCardsSlider :games="trending" />
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import { mapState, mapActions } from 'vuex'
import GameCardsSlider from '~/components/GameCardsSlider'
export default {
  components: { GameCardsSlider },
  data() {
    return {
      textValues: [
        'Steam',
        'PlayStation Store',
        'Xbox Store',
        'App Store',
        'GOG',
        'Nintendo Store',
        'Xbox 360 Store',
        'Google Play',
        'itch.io',
        'Epic Games'
      ],
      textValue: null,
      timeoutText: null
    }
  },
  computed: {
    ...mapState('games', ['trending', 'recommended'])
  },
  mounted() {
    this.changeText()
    this.loadGames()
  },
  destroyed() {
    this.timeoutText = null
  },
  methods: {
    ...mapActions('games', ['loadGames']),
    changeText() {
      this.textValue = _.sample(this.textValues)
      this.timeoutText = setTimeout(this.changeText, 3500)
    }
  }
}
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

#but {
  background-color: #6617cb;
  background-image: linear-gradient(315deg, #6617cb 0%, #cb218e 74%);
  box-shadow: 0 0 0 0 #ec008c, 0.2rem 0.2rem 30px #6617cb;
}
#but:hover {
  box-shadow: 0 0 0 0 #ec008c, 0.2rem 0.2rem 60px #6617cb;
}
</style>
