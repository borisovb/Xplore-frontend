<template>
  <div class="my-2 px-10">
    <div class="text-3xl font-normal my-5">
      <i class="fas fa-user-circle text-gray-600"></i> {{ user.username }}'s
      Profile
    </div>
    <div class="grid grid-cols-1 xl:grid-cols-3">
      <div class="col-span-1 flex justify-center">
        <div>
          <div
            class="max-w-md rounded-lg overflow-hidden shadow-lg my-2 bg-sec"
          >
            <div class="relative mb-6">
              <img
                class="w-full"
                :src="
                  user.profilePicture
                    ? user.profilePicture
                    : require('~/assets/img/profile-pic.jpg')
                "
                alt="Profile picture"
              />
              <div
                class="text-center absolute w-full py-3"
                style="bottom: -40px"
              >
                <div class="mb-2">
                  <p
                    class="text-white tracking-wide uppercase text-lg font-bold"
                  >
                    {{ user.username }}
                  </p>
                  <p class="text-gray-400 text-sm">{{ user.email }}</p>
                </div>
                <button
                  v-if="user.username !== $store.state.auth.user.name"
                  class="gradient-btn p-4 rounded-full transition ease-in duration-200 focus:outline-none"
                >
                  <i class="fas fa-plus"></i> Add Friend
                </button>
              </div>
            </div>
            <div
              class="py-12 px-6 text-center tracking-wide grid grid-cols-3 gap-6"
            >
              <div class="posts">
                <p class="text-gray-500">{{ favorites.length }}</p>
                <p class="text-m">Favorite</p>
              </div>
              <div class="followers">
                <p class="text-gray-500">{{ wishlist.length }}</p>
                <p class="text-m">Wishlist</p>
              </div>
              <div class="following">
                <p class="text-gray-500">{{ friends.length }}</p>
                <p class="text-m">Friends</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-2">
        <div class="text-3xl font-normal mx-6 mb-5">
          <i class="fas fa-heart text-gray-600"></i> Favorites
        </div>
        <div
          v-if="favorites.length < 1"
          class="border-4 border-gray-700 shadow-md rounded-md mx-6 mb-5 mt-2 flex justify-center items-center"
          style="height: 350px;"
        >
          <p class="text-xl text-gray-600">NO FAVORITES</p>
        </div>
        <GameCardsSlider
          v-if="favorites.length >= 1"
          :sm="true"
          :games="favorites"
        />

        <div class="text-3xl font-normal mx-6 mb-5 mt-8">
          <i class="fas fa-gift text-gray-600"></i> Wishlist
        </div>
        <div
          v-if="wishlist.length < 1"
          class="border-4 border-gray-700 shadow-md rounded-md mx-6 mb-5 mt-2 flex justify-center items-center"
          style="height: 350px;"
        >
          <p class="text-xl text-gray-600">NOTHING IN WISHLIST</p>
        </div>
        <GameCardsSlider v-if="wishlist.length >= 1" sm :games="wishlist" />
      </div>
    </div>
  </div>
</template>

<script>
import GameCardsSlider from '~/components/GameCardsSlider'

export default {
  components: { GameCardsSlider },
  data() {
    return {
      user: { username: '', email: '' },
      favorites: [],
      wishlist: [],
      friends: []
    }
  },
  middleware: 'auth',
  async mounted() {
    const name = this.$route.params.username
    try {
      const {
        user: { username, email },
        favorites,
        wishlist,
        friends,
        profilePicture
      } = await this.$api.users.getUser(name)

      this.user = { username, email }
      this.user.profilePicture = profilePicture.image
      this.favorites = favorites.games
      this.wishlist = wishlist.games
      this.friends = friends.friends
    } catch (error) {
      return this.$router.push('/404')
    }
  }
}
</script>

<style scoped>
.gradient-btn {
  background-color: #373f51;
  background-image: linear-gradient(315deg, #373f51 0%, #58a4b0 74%);
  box-shadow: 0 0 0 0 #58a4b0, 0.2rem 0.2rem 30px #373f51;
}
.gradient-btn:hover {
  box-shadow: 0 0 0 0 #58a4b0, 0.2rem 0.2rem 60px #373f51;
}
</style>
