<template>
  <ul class="list">
    <li
      v-for="(item, i) in list"
      class="list__item"
      :key="item.key ? item.key : i"
    >
      <slot :item="item"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang='scss'>
.list {
  @extend %reset-ul;
}
</style>