<template>
  <div class="logo">
    <img src="@/static/xplore.png" />
  </div>
</template>
<style scoped>
.logo {
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
</style>
