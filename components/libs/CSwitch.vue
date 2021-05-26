<template>
  <div class="cSwitch">
    <span
      class="cSwitch__spot"
      :class="{ 'cSwitch__spot--active': !value }"
      @click="handleClick(false)"
    >
      無</span
    >
    <span
      class="cSwitch__spot"
      :class="{ 'cSwitch__spot--active': value }"
      @click="handleClick(true)"
      >有</span
    >

    <div
      class="cSwitch__circle"
      :class="{ 'cSwitch__circle--active': value }"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    trueLabel: {
      type: String,
      default: '有',
    },
    falseLabel: {
      type: String,
      default: '無',
    },
  },
  methods: {
    handleClick(value) {
      this.$emit('input', value)
    },
  },
}
</script>

<style lang='scss'>
.cSwitch {
  position: relative;
  cursor: pointer;
  user-select: none;
  width: 58px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #eeeeee;
  color: #eeeeee;
  display: flex;
  font-size: 14px;
  font-weight: 400;
  background-color: #fff;
  &__spot {
    position: relative;
    z-index: 1;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    &--active {
      color: #ffffff;
      font-weight: 500;
    }
  }
  &__circle {
    position: absolute;
    width: 50%;
    height: 100%;
    left: 0;
    background-color: color('primary');
    border-radius: 50%;
    z-index: 0;

    transition: transform 0.2s;
    &--active {
      transform: translateX(100%);
    }
  }
}
</style>