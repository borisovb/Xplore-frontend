<template>
  <div class="main-container">
    <loading
      :active.sync="waitingForResponse"
      :can-cancel="false"
      loader="dots"
      :opacity="1"
      color="#58A4B0"
      background-color="#373f51"
    ></loading>
    <Navbar />
    <nuxt class="flex-1" />
    <div class="p-12"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Loading from 'vue-loading-overlay'
import Navbar from '@/components/Navbar'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  components: {
    Navbar,
    Loading
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
