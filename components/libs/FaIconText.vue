<template >
  <div class="iconText" :is="tag" :class="{ 'iconText--reverse': reverse }">
    <font-awesome-icon :icon="icon" :class="['iconText-icon', iconClass]" />
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    // slot
    tag: {
      type: String,
      default: 'div',
    },
    iconClass: {
      type: String,
    },
    icon: {
      type: String,
      required: true,
    },
    reverse: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss">
.iconText {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  &-icon {
    max-height: 1.5em;
    max-width: 1.5em;
    margin-right: 15px;
  }
  &--reverse {
    flex-direction: row-reverse;
    .iconText-icon {
      margin-right: 0;
      margin-left: 15px;
    }
  }
}
</style>