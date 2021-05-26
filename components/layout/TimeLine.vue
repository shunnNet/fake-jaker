<template functional>
  <div class="timeline" :class="[data.staticClass, data.class]">
    <div class="timeline__top">
      <div class="timeline__min">{{ props.options.min.top }}</div>
      <div class="timeline__max">{{ props.options.max.top }}</div>
    </div>

    <div class="timeline__line"></div>

    <div class="timeline__bottom">
      <div class="timeline__min">{{ props.options.min.bottom }}</div>
      <div class="timeline__max">{{ props.options.max.bottom }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang='scss'>
.timeline {

  &__line {
    width: 100%;
    border-top: 3px solid #eeeeee;
    margin: 10px 0;
  }
  &__top,
  &__bottom {
    display: flex;
    justify-content: space-between;
    font-weight: 500;
  }
}
</style>