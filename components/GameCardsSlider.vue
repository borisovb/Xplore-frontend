<template>
  <div class="ml-10 mr-4 mb-5 mt-2">
    <div v-swiper="swiperOptions">
      <div class="swiper-wrapper">
        <GameCard
          v-for="game in games"
          :key="game.id"
          :game="game"
          class="swiper-slide"
        ></GameCard>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  </div>
</template>

<script>
import GameCard from '@/components/GameCard'

export default {
  name: 'GameCardsSlider',
  components: {
    GameCard
  },
  props: {
    games: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 10,
        slidesPerGroup: 1,
        preventClicks: false,
        preventClicksPropagation: false,
        breakpoints: {
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 3
          },
          1280: {
            slidesPerView: 4,
            slidesPerGroup: 4
          }
        },
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
}
</script>

<style scoped>
.swiper-container {
  height: 350px;
}
</style>
