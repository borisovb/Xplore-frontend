<template>
  <div>
    <div
      class="w-full gameCard bg-gray-500 rounded-t-lg shadow-md"
      :style="{
        background: ' url(\'' + game.background_image + '\')',
        backgroundSize: 'cover',
        height: '60%'
      }"
    ></div>
    <div
      class="w-full gameCard bg-sec rounded-b-lg shadow-md flex items-center"
      style="height: 40%"
    >
      <div class="ml-5 w-full">
        <div>
          <i
            v-for="platform of game.platforms"
            :key="platform"
            class="text-sm mr-2"
            :class="[platform]"
          />
        </div>
        <div class="text-xl">{{ game.name }}</div>
        <div class="flex w-full my-2">
          <Btn> <i class="fas fa-plus"></i> Favorite </Btn>
          <Btn class="p-2 mx-2"> <i class="fas fa-gift"></i> Wishlist </Btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameCard',
  props: {
    game: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>
.gameCard {
  animation: 1s appear;
}
@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
