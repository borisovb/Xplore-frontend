<template>
  <div class="main-container">
    <Navbar />
    <nuxt class="flex-1" />
    <div class="p-12"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Navbar from '@/components/Navbar'

export default {
  components: {
    Navbar
  },
  computed: {
    ...mapState('ui', ['waitingForResponse'])
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
