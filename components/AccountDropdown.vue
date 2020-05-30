<template>
  <div class="relative inline-block text-left">
    <div>
      <span class="rounded-md shadow-sm">
        <button
          type="button"
          class="inline-flex justify-center w-full bg-custom px-4 py-2 shadow-sm leading-5
          text-sm font-medium text-white hover:text-white-200 
          focus:outline-none focus:shadow-xl focus:shadow-outline-blue
          transition ease-in-out duration-150"
          :class="{ 'rounded-md': !showDropdown, 'rounded-t-md': showDropdown }"
          @click="show"
        >
          <p class="font-bold">
            <slot></slot>
            <i
              v-if="!showDropdown"
              class="fas fa-angle-down align-middle mx-1"
            ></i>
            <i
              v-if="showDropdown"
              class="fas fa-angle-up align-middle mx-1"
            ></i>
          </p>
        </button>
      </span>
    </div>
    <transition name="slide">
      <div
        v-if="showDropdown"
        class="origin-top-right absolute right-0 w-full shadow-lg"
        :class="{ 'rounded-b-md': showDropdown }"
      >
        <div
          class="bg-custom shadow-xs"
          :class="{ 'rounded-b-md': showDropdown }"
        >
          <div class="py-1">
            <p
              class="block px-4 py-2 text-sm leading-5 text-gray-100
            bg-hover hover:text-white focus:outline-none"
            >
              <i class="far fa-user-circle align-middle mx-2"></i> Account
            </p>
            <p
              class="block px-4 py-2 text-sm leading-5 text-gray-100
            bg-hover hover:text-white focus:outline-none"
            >
              <i class="fas fa-users align-middle mx-2"></i> Friends List
            </p>
            <p
              class="block px-4 py-2 text-sm leading-5 text-gray-100
            bg-hover hover:text-white focus:outline-none"
            >
              <i class="fas fa-user-plus align-middle mx-2"></i> Add Friend
            </p>
            <p
              class="block px-4 py-2 text-sm leading-5 text-gray-100
            bg-hover hover:text-white focus:outline-none"
              @click="logout"
            >
              <i class="fas fa-sign-out-alt align-middle mx-2"></i> Log Out
            </p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      showDropdown: false
    }
  },
  methods: {
    ...mapActions('auth', ['logout']),
    show() {
      this.showDropdown = !this.showDropdown
    }
  }
}
</script>

<style scoped>
.bg-custom {
  background: #505a7167;
}
.bg-hover:hover {
  background: #505a71;
  cursor: pointer;
}

.slide-enter-active {
  transition-duration: 0.3s;
  transition-timing-function: ease-in;
}
.slide-leave-active {
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}
.slide-enter-to,
.slide-leave {
  max-height: 200px;
  overflow: hidden;
}
.slide-enter,
.slide-leave-to {
  max-height: 0;
  overflow: hidden;
}
</style>
