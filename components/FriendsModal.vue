<template>
  <modal
    name="friends"
    transition="pop-up"
    height="auto"
    :adaptive="true"
    :scrollable="true"
    styles="background: rgb(55,63,81);
    background: linear-gradient(207deg, rgba(55,63,81,1) 46%, rgba(0,0,0,1) 100%);
    border: 1px solid white;"
    @before-close="toggleFriendsModal(false)"
  >
    <div class="text-2xl font-normal text-white m-4">
      <i class="fas fa-user-friends"></i> Friends List
      <div v-for="friend in friends" :key="friend.username">
        <div class="flex p-2 text-lg hover:bg-white hover:text-black">
          <div class="justify-center  w-1/2">
            {{ friend.username }}
          </div>
          <div class="w-1/2 float-right">
            <button class="rounded-lg p-2 bg-red-600">
              DELETE
            </button>
          </div>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'FriendsModal',
  computed: {
    ...mapState('auth', ['friends'])
  },
  mounted() {
    this.$modal.show('friends')
  },
  methods: {
    ...mapActions('auth', ['toggleFriendsModal'])
  }
}
</script>

<style scoped></style>
