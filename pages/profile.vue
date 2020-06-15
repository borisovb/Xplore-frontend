<template>
  <div class="my-2 px-10">
    <div class="text-3xl font-normal my-5">
      <i class="fas fa-user-circle text-gray-600"></i> John's Profile
    </div>
    <div class="grid grid-cols-1 xl:grid-cols-3">
      <div class="col-span-1 flex justify-center">
        <div>
          <div
            class="max-w-md rounded-lg overflow-hidden shadow-lg my-2 bg-sec"
          >
            <div class="relative mb-6">
              <img
                class="w-full"
                :src="user.profilePicture"
                alt="Profile picture"
              />
              <div class="text-center absolute w-full" style="bottom: -35px">
                <div class="mb-5">
                  <p
                    class="text-white tracking-wide uppercase text-lg font-bold"
                  >
                    Witch
                  </p>
                  <p class="text-gray-400 text-sm">john.doe@gmail.com</p>
                </div>
                <button
                  id="but"
                  class="p-4 rounded-full transition ease-in duration-200 focus:outline-none"
                >
                  <i class="fas fa-plus"></i> Add Friend
                </button>
              </div>
            </div>
            <div
              class="py-10 px-6 text-center tracking-wide grid grid-cols-3 gap-6"
            >
              <div class="posts">
                <p class="text-gray-500">10</p>
                <p class="text-m">Favorite</p>
              </div>
              <div class="followers">
                <p class="text-gray-500">24</p>
                <p class="text-m">Wishlist</p>
              </div>
              <div class="following">
                <p class="text-gray-500">62</p>
                <p class="text-m">Friends</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-2">
        <div class="text-3xl font-normal mx-6 mb-5">
          <i class="fas fa-user-check text-gray-600"></i> Wishlist
        </div>
        <GameCardsSlider :sm="true" :games="recommended" />

        <div class="text-3xl font-normal mx-6 mb-5 mt-8">
          <i class="fas fa-user-check text-gray-600"></i> Wishlist
        </div>
        <GameCardsSlider sm :games="recommended" />
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
    ...mapState('games', ['trending', 'recommended']),
    ...mapState('auth', ['user'])
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
  background-color: #373f51;
  background-image: linear-gradient(315deg, #373f51 0%, #58a4b0 74%);
  box-shadow: 0 0 0 0 #58a4b0, 0.2rem 0.2rem 30px #373f51;
}
#but:hover {
  box-shadow: 0 0 0 0 #58a4b0, 0.2rem 0.2rem 60px #373f51;
}
</style>
