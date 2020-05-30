<template>
  <div class="main-container">
    <Navbar />
    <nuxt class="flex-1" />
    <!-- <div>Footer</div> -->
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>

<style>
.main-container {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
</style>
