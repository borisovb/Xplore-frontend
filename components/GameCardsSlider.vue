<template>
  <div class="mx-6 mb-5 mt-2">
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
    },
    sm: {
      type: Boolean,
      default: false
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
            slidesPerView: this.sm ? 2 : 3,
            slidesPerGroup: this.sm ? 2 : 3
          },
          1280: {
            slidesPerView: this.sm ? 3 : 4,
            slidesPerGroup: this.sm ? 3 : 4
          }
        },
        loop: !this.sm,
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
