<template functional>
  <div
    class="iconTitle"
    :class="[
      { 'iconTitle--narrow': props.narrow },
      data.staticClass,
      data.class,
    ]"
  >
    <div class="iconTitle__head">
      <IconText icon="Plus" class="iconTitle__title" v-if="props.icon">
        {{ props.title }}
      </IconText>
      <h4 v-else class="iconTitle__title">{{ props.title }}</h4>
      <span class="iconTitle__sub" v-if="props.sub">
        {{ props.sub }}
      </span>
    </div>
    <p class="iconTitle__desc" v-if="props.desc">{{ props.desc }}</p>
  </div>
</template>

<script>
export default {
  props: {
    icon: {},
    title: String,
    sub: String,
    desc: String,
    narrow: Boolean,
  },
}
</script>

<style lang='scss'>
.iconTitle {
  &__head {
    display: flex;
    justify-content: space-between;
  }
  &__title {
    font-size: 18px;
    line-height: 20px;
    font-weight: 500;
  }
  &__desc {
    font-size: 12px;
    line-height: 14px;
    color: #9b9b9b;
  }
}
.iconTitle--narrow {
  .iconTitle {
    &__head {
      display: flex;
      justify-content: flex-start;
    }
    &__title,
    &__sub {
      width: 70%;
      font-size: 14px;
      line-height: 16px;
      font-weight: 500;
    }
    &__desc {
      font-size: 12px;
      line-height: 14px;
      color: #9b9b9b;
    }
  }
}
</style>