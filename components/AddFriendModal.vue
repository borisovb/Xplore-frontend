<template>
  <modal
    name="add-friends"
    transition="pop-up"
    height="auto"
    :adaptive="true"
    :scrollable="true"
    styles="background: rgb(55,63,81);
    background: linear-gradient(207deg, rgba(55,63,81,1) 46%, rgba(0,0,0,1) 100%);
    border: 1px solid white;"
    @before-close="toggleAddFriendModal(false)"
  >
    <div class="text-2xl font-normal text-white m-4">
      <i class="fas fa-user-plus"></i> Add Friend
    </div>
    <form @submit.prevent="addFriend">
      <input
        v-model="addFriendUsername"
        class="bg-input w-4/5 m-4 h-10 px-5 py-2 pr-16 rounded-full shadow-md text-sm focus:outline-none text-gray-800"
        type="search"
        placeholder="Add Friend"
      />
      <button
        type="submit"
        class="absolute right-0 top-0 mt-2 mr-4 text-blue-500"
      >
        <i class="fas fa-search"></i>
      </button>
    </form>
  </modal>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'AddFriendModal',
  data() {
    return {
      addFriendUsername: ''
    }
  },
  computed: {
    ...mapState('auth', ['friends'])
  },
  mounted() {
    this.$modal.show('add-friends')
  },
  methods: {
    ...mapActions('auth', ['toggleAddFriendModal', 'addToFriendsList']),
    addFriend() {
      try {
        console.log(this.addFriendUsername)
        console.log(this.friends)
        this.addToFriendsList(this.addFriendUsername)
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
