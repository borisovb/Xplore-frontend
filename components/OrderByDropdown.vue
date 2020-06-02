<template>
  <div class="inline-block relative w-full md:w-auto mx-2">
    <button
      class="bg-gray-700 hover:bg-gray-600 w-full md:w-auto py-5 px-10
    cursor-pointer text-white shadow-md focus:outline-none"
      :class="{ 'rounded-lg': !showDropdown, 'rounded-t-lg': showDropdown }"
      @click="show"
    >
      <i class="fas fa-sort"></i> Order By
    </button>
    <transition name="slide">
      <ul
        v-if="showDropdown"
        class="bg-gray-700 absolute text-white hover:text-white-200 pt-1 w-full"
      >
        <li
          class="hover:bg-gray-600 p-5 block whitespace-no-wrap cursor-pointer"
          :class="{
            'font-bold bg-gray-600': orderBy === null
          }"
          @click="onChangeOrderBy(null)"
        >
          <i class="fas fa-check p-1 text-gray-400"></i>
          <a>Relevance</a>
        </li>
        <li
          class="hover:bg-gray-600 p-5 block whitespace-no-wrap cursor-pointer"
          :class="{
            'font-bold bg-gray-600': orderBy === 'rating'
          }"
          @click="onChangeOrderBy('rating')"
        >
          <i class="fas fa-star p-1 text-gray-400"></i>
          <a>Rating</a>
        </li>
        <li
          class="rounded-b hover:bg-gray-600 p-5 block whitespace-no-wrap cursor-pointer"
          :class="{ 'font-bold bg-gray-600': orderBy === 'name' }"
          @click="onChangeOrderBy('name')"
        >
          <i class="fas fa-sort-alpha-down p-1 text-gray-400"></i>
          <a>Name</a>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      showDropdown: false
    }
  },
  computed: {
    ...mapState('search', ['orderBy'])
  },
  methods: {
    ...mapActions('search', ['setOrderBy']),
    show() {
      this.showDropdown = !this.showDropdown
    },
    onChangeOrderBy(orderBy) {
      this.setOrderBy(orderBy)
      this.showDropdown = false
      this.$emit('orderChanged')
    }
  }
}
</script>
