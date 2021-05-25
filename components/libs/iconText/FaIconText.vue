<template functional>
  <div
    :is="props.tag"
    :class="[
      'iconText',
      { 'iconText--reverse': props.reverse },
      data.staticStyle,
      data.style,
    ]"
    v-on="data.on"
  >
    <font-awesome-icon
      :icon="props.icon"
      :class="['iconText-icon', props.iconClass]"
    />
    <slot></slot>
  </div>
</template>

<script>
import IconText from './IconText.vue'
export default {
  extends: IconText,
}
</script>
