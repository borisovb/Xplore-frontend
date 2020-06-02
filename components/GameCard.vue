<template>
  <div class="w-full h-full">
    <nuxt-link :to="'/games/' + game.id">
      <div
        class="w-full gameCard bg-gray-500 rounded-t-lg shadow-md cursor-pointer"
        :style="{
          background: ' url(\'' + game.background_image + '\')',
          backgroundSize: 'cover',
          height: '60%'
        }"
      ></div>
    </nuxt-link>
    <div
      class="w-full gameCard bg-sec rounded-b-lg shadow-md flex items-center"
      style="height: 40%"
    >
      <div class="ml-5 w-full">
        <div>
          <i
            v-for="platform in game.parent_platforms"
            :key="platform.id"
            class="text-sm mr-2"
            :class="platformIcons[platform.platform.name]"
          />
        </div>
        <nuxt-link :to="'/games/' + game.id"
          ><div class="text-xl">{{ game.name }}</div></nuxt-link
        >
        <!-- <div class="flex w-full my-2">
          <Btn @click.native="addFavorite">
            <i class="fas fa-plus"></i> Favorite
          </Btn>
          <button @click="addFavorite">test</button>
          <Btn class="p-2 mx-2"> <i class="fas fa-gift"></i> Wishlist </Btn>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'GameCard',
  props: {
    game: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    ...mapState('icons', ['platformIcons'])
  },
  methods: {
    addFavorite() {
      console.log('Add Favorite')
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
