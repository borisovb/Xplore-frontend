<template>
  <div class="w-full">
    <div class="flex mb-4 my-10">
      <div class="w-2/3">
        <div class="mx-16">
          <div class="text-5xl font-normal">Xplore your gaming interests</div>
          <span class="text-3xl font-light"
            >Find amazing games avaiable on
          </span>
          <transition name="slide-fade" mode="out-in">
            <span :key="textValue" class="text-3xl font-bold">
              {{ textValue }}</span
            >
          </transition>
        </div>
      </div>
      <div class="w-1/3">
        <div class="w-1/2">
          <img class="p-1" src="~static/gamepad.png" />
        </div>
      </div>
    </div>

    <div class="text-3xl font-normal mx-10">New & Trending</div>
    <GameCardComponent v-bind:game-data="gameData" />

    <div class="text-3xl font-normal mx-10">Recommendations</div>
    <GameCardComponent v-bind:game-data="gameData" />

    <div class="text-3xl font-normal mx-10">Best deals</div>
    <GameCardComponent v-bind:game-data="gameData" />
  </div>
</template>

<script>
import _ from 'lodash'
import GameCardComponent from '../components/GameCardComponent'
export default {
  components: { GameCardComponent },
  data() {
    return {
      gameData: [
        {
          id: 1,
          name: 'Need For Speed Heat',
          imgurl: 'needforspeedheat.png',
          platform: ['fab fa-playstation', 'fab fa-xbox', 'fab fa-windows']
        },
        {
          id: 2,
          name: 'Battlefield 5',
          imgurl: 'battlefield-5.png',
          platform: ['fab fa-playstation', 'fab fa-xbox', 'fab fa-windows']
        },
        {
          id: 3,
          name: 'Halo 5',
          imgurl: 'halo-5.png',
          platform: ['fab fa-xbox']
        }
      ],
      textValues: [
        'Xbox',
        'Playstation',
        'PC',
        'Mac',
        'Linux',
        'Steam',
        'Epic Games Store',
        'GOG.com'
      ],
      textValue: null,
      timeoutText: null
    }
  },
  mounted() {
    this.changeText()
  },
  destroyed() {
    this.timeoutText = null
  },
  methods: {
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
