<template>
  <modal
    name="friends"
    transition="pop-out"
    height="auto"
    :adaptive="true"
    :scrollable="true"
    @before-close="toggleFriendsModal(false)"
  >
    <div class="text-lg font-normal text-gray-900">
      <div class="text-3xl font-normal m-5">
        <i class="fas fa-user-friends text-gray-600"></i> Friends List
      </div>
      <div
        v-if="friends.length <= 0"
        class="mb-5 h-20 flex justify-center items-center"
      >
        <p class="text-2xl text-gray-500">NO FRIENDS</p>
      </div>
      <div
        v-if="friends.length >= 1"
        class="h-64 overflow-y-auto overflow-x-hidden m-0"
      >
        <div
          v-for="friend in friends"
          :key="friend.user.username"
          class="bg-gray-200 rounded-lg w-auto my-2 mx-6 p-2 flex"
        >
          <nuxt-link :to="'/users/' + friend.user.username" class="flex">
            <div class="w-8 h-8 inline-block">
              <img
                class="rounded-full"
                :src="
                  friend.picture.image
                    ? friend.picture.image
                    : require('~/assets/img/profile-pic.jpg')
                "
              />
            </div>
            <div class="mx-2">{{ friend.user.username }}</div>
          </nuxt-link>
          <div
            class="ml-auto mr-2 text-gray-400 hover:text-red-600 cursor-pointer"
            @click="removeFriend(friend.user.username)"
          >
            <i class="fas fa-user-slash"></i>
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
  watch: {
    $route(to, from) {
      this.$modal.hide('friends')
    }
  },
  mounted() {
    this.$modal.show('friends')
  },
  methods: {
    ...mapActions('auth', ['toggleFriendsModal', 'removeFromFriends']),
    async removeFriend(username) {
      try {
        await this.removeFromFriends(username)
        this.$toast.open({
          message: `<i class="fas fa-check-circle"></i> You successfully removed ${username} from your friends list.`,
          duration: 5000,
          type: 'success',
          position: 'top-right'
        })
      } catch (error) {
        this.$toast.open({
          message: '<i class="fas fa-times-circle"></i> Something went wrong.',
          duration: 5000,
          type: 'error',
          position: 'top-right'
        })
      }
    }
  }
}
</script>

<style scoped></style>
