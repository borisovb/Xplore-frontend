<template>
  <div
    class="rounded-lg p-2 cursor-pointer"
    :class="{ 'bg-main': !highlighted, 'bg-highlight': highlighted }"
    @click="$emit('click')"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    highlighted: {
      type: Boolean,
      default: false
    }
  }
}
</script>
