<template>
  <div class="w-full">
    <div class="bg-gray-600 w-full h-16">
      <!-- Navbar -->
    </div>
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
    <div class="h-56 grid grid-cols-4 gap-4 mx-10 my-5">
      <div class="w-full h-full bg-gray-600"></div>
      <div class="w-full h-full bg-gray-600"></div>
      <div class="w-full h-full bg-gray-600"></div>
      <div class="w-full h-full bg-gray-600"></div>
    </div>
    <div class="text-3xl font-normal mx-10">Recommendations</div>
    <div class="h-56 grid grid-cols-4 gap-4 mx-10 my-5">
      <div class="w-full h-full bg-gray-600"></div>
      <div class="w-full h-full bg-gray-600"></div>
      <div class="w-full h-full bg-gray-600"></div>
      <div class="w-full h-full bg-gray-600"></div>
    </div>
    <div class="text-3xl font-normal mx-10">Best deals</div>
    <div class="h-56 grid grid-cols-4 gap-4 mx-10 my-5">
      <div class="w-full h-full bg-gray-600"></div>
      <div class="w-full h-full bg-gray-600"></div>
      <div class="w-full h-full bg-gray-600"></div>
      <div class="w-full h-full bg-gray-600"></div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
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
