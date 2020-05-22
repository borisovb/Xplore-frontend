<template>
  <div>
    <div class="h-56 grid grid-cols-4 gap-4 mx-10 my-5">
      <div
        id="gameCard"
        class="w-full h-full gameCard"
        v-for="game in gameData"
        v-bind:key="game.id"
        v-bind:style="{
          background:
            'linear-gradient(rgba(255,255,255,0), rgba(0,0,0,.7)), url(\'' +
            game.imgurl +
            '\')',
          backgroundSize: 'cover',
          borderRadius: '15px'
        }"
      >
        <div class="gameCardInfo">
          <router-link
            :to="{ name: 'game_details', params: { name: game.name } }"
          >
            <h3 id="game_name">{{ game.name }}</h3>
            <div class="flex">
              <div v-for="platform of game.platform" :key="platform">
                <i id="platformLogo" v-bind:class="[platform]" />
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameCardComponent',
  props: ['gameData'],
  methods: {}
}
</script>

<style scoped>
.gameCard {
  position: relative;
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.gameCardInfo {
  position: absolute;
  bottom: 5%;
  left: 3%;
}
#platformLogo {
  font-size: 20px;
  margin-right: 10px;
}
</style>
