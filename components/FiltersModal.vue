<template>
  <modal
    name="filters"
    transition="pop-out"
    height="auto"
    :adaptive="true"
    :scrollable="true"
    @before-close="toggleFilters(false)"
  >
    <div class="p-5 text-black">
      <div class="py-3">
        <div class="text-3xl font-normal">
          <i class="fas fa-gamepad text-gray-600"></i> Platform
        </div>
        <div class="my-5">
          <div
            v-for="platform in platforms"
            :key="platform.id"
            class="inline-block p-2 text-xl"
          >
            <input
              type="checkbox"
              :name="platform.name"
              :checked="platform.selected"
              @change="togglePlatform(platform)"
            />
            <label :for="platform.name">
              <i :class="platformIcons[platform.name]"></i>
              {{ platform.name }}
            </label>
          </div>
        </div>
      </div>

      <div class="py-3">
        <div class="text-3xl font-normal">
          <i class="fas fa-puzzle-piece text-gray-600"></i> Genre
        </div>
        <div class="my-5">
          <p
            v-for="genre in genres"
            :key="genre.id"
            :name="genre.name"
            class="inline-block p-2 text-xl"
          >
            <input
              type="checkbox"
              :checked="genre.selected"
              @change="toggleGenre(genre)"
            />
            <label :for="genre.name">{{ genre.name }}</label>
          </p>
        </div>
      </div>
      <div class="flex">
        <div class="ml-auto flex">
          <Btn class="mx-2" @click="toggleFilters(false)">Cancel</Btn>
          <Btn highlighted @click="saveFilters">Save</Btn>
        </div>
      </div>
    </div>
  </modal>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'FiltersModal',
  computed: {
    ...mapState('search', ['platforms', 'genres']),
    ...mapState('icons', ['platformIcons'])
  },
  mounted() {
    this.$modal.show('filters')
  },
  methods: {
    ...mapActions('search', [
      'toggleFilters',
      'setSelectedPlatform',
      'setSelectedGenre'
    ]),
    togglePlatform(platform) {
      this.setSelectedPlatform({ id: platform.id, bool: !platform.selected })
    },
    toggleGenre(genre) {
      this.setSelectedGenre({ id: genre.id, bool: !genre.selected })
    },
    saveFilters() {
      this.toggleFilters(false)
      this.$emit('filtersChanged')
    }
  }
}
</script>
<style lang="postcss">
input[type='checkbox'] {
  transform: scale(1.2);
  padding: 10px;
}
</style>
