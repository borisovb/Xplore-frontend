<template>
  <div class="gradient">
    <nav class="grid md:grid-cols-3 grid-cols-2 h-16 w-full my-3">
      <div class="pl-5 md:pl-12 max-w-full max-h-full">
        <a href="/">
          <img
            class="object-contain h-16 max-w-full max-h-full mt-1"
            src="@/static/xplore-white.png"
          />
        </a>
      </div>
      <div class="md:flex content-center flex-wrap hidden">
        <div class="relative mx-auto w-full text-gray-800 max-h-full">
          <form @submit.prevent="search">
            <input
              v-model="searchQuery"
              class="bg-input w-full h-10 px-5 py-2 pr-16 rounded-full shadow-md text-sm focus:outline-none"
              type="search"
              placeholder="Search"
            />
            <button
              type="submit"
              class="absolute right-0 top-0 mt-2 mr-4 text-blue-500"
            >
              <i class="fas fa-search"></i>
            </button>
          </form>
        </div>
      </div>
      <div class="flex content-center justify-end flex-wrap pr-5 md:pr-12">
        <AccountDropdown v-if="user !== null">
          <img
            class="w-8 h-8 rounded-full inline mx-2"
            :src="
              user.profilePicture
                ? user.profilePicture
                : require('~/assets/img/profile-pic.jpg')
            "
          />
          {{ user.name }}
        </AccountDropdown>

        <div v-if="user === null">
          <a class="mx-3" href="#" @click="toggleLoginModal(true)">Login</a>
          <a class="mx-3" href="#" @click="toggleSignUpModal(true)">Sign Up</a>
        </div>
      </div>
    </nav>
    <div class="flex content-center flex-wrap mx-10 md:hidden">
      <div class="relative mx-auto w-full text-gray-800 max-h-full">
        <form @submit.prevent="search">
          <input
            v-model="searchQuery"
            class="bg-input w-full h-10 px-5 py-2 pr-16 rounded-full shadow-md text-sm focus:outline-none"
            type="search"
            placeholder="Search"
          />
          <button
            type="submit"
            class="absolute right-0 top-0 mt-2 mr-4 text-blue-500"
          >
            <i class="fas fa-search"></i>
          </button>
        </form>
      </div>
    </div>
    <LoginModal v-if="loginModal"></LoginModal>
    <SignInModal v-if="signUpModal"></SignInModal>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import LoginModal from '~/components/LoginModal'
import SignInModal from '~/components/SignInModal'
import AccountDropdown from '~/components/AccountDropdown'

export default {
  components: {
    LoginModal,
    SignInModal,
    AccountDropdown
  },
  data() {
    return {
      searchQuery: ''
    }
  },
  computed: {
    ...mapState('auth', ['token', 'user', 'loginModal', 'signUpModal'])
  },
  methods: {
    ...mapActions('auth', ['toggleLoginModal', 'toggleSignUpModal']),
    search() {
      if (/\S/.test(this.searchQuery)) {
        this.$router.push('/search/' + this.searchQuery)
      }
    }
  }
}
</script>
<style scoped>
.gradient {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.40379901960784315) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}
</style>
