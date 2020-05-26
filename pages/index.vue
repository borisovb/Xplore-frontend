<template>
  <div class="w-full">
    <div class="grid md:grid-cols-3 mb-4 my-10">
      <div class="flex content-center flex-wrap mx-5 md:ml-10 md:col-span-2">
        <div class="mx-6 md:mx-16">
          <div class="text-3xl md:text-5xl font-normal">
            Xplore your gaming interests
          </div>
          <span class="text-xl md:text-3xl font-light"
            >Find amazing games avaiable on
          </span>
          <transition name="slide-fade" mode="out-in">
            <span :key="textValue" class="text-xl md:text-3xl font-bold">
              {{ textValue }}</span
            >
          </transition>
        </div>
      </div>
      <div
        class="flex content-center justify-center md:justify-end flex-wrap p-12 md:pr-10 md:max-w-xl max-w-md"
      >
        <img class="p-1" src="~static/gamepad.png" />
      </div>
    </div>

    <div class="text-3xl font-normal mx-10">New & Trending</div>
    <GameCardsSlider :games="trending" />

    <div class="text-3xl font-normal mx-10">Recommendations</div>
    <GameCardsSlider :games="recommended" />

    <!-- <div class="text-3xl font-normal mx-10">Best deals</div>
    <GameCardsSlider :games="gameData" /> -->
  </div>
</template>

<script>
import _ from 'lodash'
import { mapState, mapActions } from 'vuex'
import GameCardsSlider from '../components/GameCardsSlider'
export default {
  components: { GameCardsSlider },
  data() {
    return {
      textValues: [
        'Xbox',
        'Playstation',
        'PC',
        'Mac',
        'Linux',
        'Steam',
        'Epic Games Store',
        'GOG'
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

<style scoped>
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
</style>
