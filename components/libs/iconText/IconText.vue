<template functional>
  <div
    :is="props.tag"
    :class="[
      'iconText',
      { 'iconText--reverse': props.reverse },
      data.staticClass,
      data.class,
    ]"
    v-on="data.on"
  >
    <component :is="props.icon" :class="['iconText-icon', props.iconClass]" />
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
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
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding-left: 1.5em;
  padding-right: 0;
  &-icon {
    position: absolute;
    left: 0;
  }
  &--reverse {
    flex-direction: row-reverse;
    padding-left: 0;
    padding-right: 1.5em;
    .iconText-icon {
      left: auto;
      right: 0;
    }
  }
}
</style>