<template>
  <modal
    name="add-friends"
    transition="pop-out"
    height="auto"
    :adaptive="true"
    :scrollable="true"
    @before-close="toggleAddFriendModal(false)"
  >
    <div class="text-lg font-normal text-gray-900">
      <div class="text-3xl font-normal m-5">
        <i class="fas fa-user-plus text-gray-600"></i> Add Friend
      </div>
    </div>
    <div class="h-16 m-10">
      <label class="label" for="username">Username</label>
      <input
        id="username"
        v-model="$v.addFriendUsername.$model"
        class="field"
        :class="{ 'border-red-500': $v.addFriendUsername.$error }"
        type="text"
        placeholder="Enter username"
      />
      <div v-if="$v.addFriendUsername.$error">
        <p
          v-if="!$v.addFriendUsername.required && $v.addFriendUsername.$dirty"
          class="text-red-500 text-xs italic mt-1"
        >
          This field is required.
        </p>
      </div>
    </div>
    <div class="flex mx-10 my-5">
      <div class="ml-auto flex">
        <Btn class="mx-2" @click="toggleAddFriendModal(false)">Cancel</Btn>
        <Btn highlighted @click="addFriend">Add</Btn>
      </div>
    </div>
  </modal>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { required } from 'vuelidate/lib/validators'
export default {
  name: 'AddFriendModal',
  data() {
    return {
      addFriendUsername: ''
    }
  },
  validations: {
    addFriendUsername: { required }
  },
  computed: {
    ...mapState('auth', ['friends'])
  },
  mounted() {
    this.$modal.show('add-friends')
  },
  methods: {
    ...mapActions('auth', ['toggleAddFriendModal', 'addToFriendsList']),
    async addFriend() {
      try {
        await this.addToFriendsList(this.addFriendUsername)
        this.$toast.open({
          message: `<i class="fas fa-check-circle"></i> You successfully added ${this.addFriendUsername} to your friends list.`,
          duration: 5000,
          type: 'success',
          position: 'top-right'
        })
        this.toggleAddFriendModal(false)
      } catch (error) {
        console.log(error.response)
        this.$toast.open({
          message:
            '<i class="fas fa-times-circle"></i> This user does not exist.',
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
