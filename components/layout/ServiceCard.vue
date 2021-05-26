<template>
  <article class="serviceCard">
    <div
      class="serviceCard__img"
      :style="{
        backgroundImage: `url(${options.img})`,
      }"
    />
    <TransitionSlide :min="0">
      <div class="serviceCard__content" v-show="!options.useSlide || show">
        <div class="serviceCard__mainContent">
          <IconTitle
            class="serviceCard__title"
            :title="options.title"
            :sub="options.sub"
            :desc="options.desc"
          />
          <ServiceList
            class="serviceCard__regularList"
            icon="CircleSolid"
            :list="options.regularList"
            :desc="options.regularListDesc"
          />
          <ServiceList
            class="serviceCard__crossList"
            icon="RedCross"
            :list="options.crossList"
            :desc="options.crossListDesc"
          />
        </div>
        <TimeCost
          class="serviceCard__timecost"
          :options="{
            minTimeText: options.minTimeText,
            minTime: options.minTime,
            maxTimeText: options.maxTimeText,
            maxTime: options.maxTime,
            timeDesc: options.timeDesc,
          }"
        />
      </div>
    </TransitionSlide>
    <button
      class="serviceCard__toggler"
      :class="{ 'serviceCard__toggler--active': show }"
      v-if="options.useSlide"
      @click="show = !show"
    >
      <span> {{ options.title }} </span>
      <Down />
    </button>
  </article>
</template>

<script>
import TimeCost from '@/components/layout/TimeCost.vue'
import IconTitle from '@/components/layout/ServiceTitle.vue'
import ServiceList from '@/components/layout/ServiceList.vue'
import TransitionSlide from '@/components/libs/animation/TransitionSlide.vue'

export default {
  props: {
    options: Object,
  },
  data() {
    return {
      show: false,
    }
  },
  components: {
    TimeCost,
    IconTitle,
    ServiceList,
    TransitionSlide,
  },
}
</script>

<style lang='scss'>
.serviceCard {
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background-color: #fff;
  &__title {
    margin-bottom: 12px;
  }
  &__img {
    width: 100%;
    height: 122px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: cemter;
    border-radius: 4px 4px 0 0;
  }
  &__content {
    display: flex;
    flex-direction: column;
    padding: 16px 20px;
    border-radius: 0 0 4px 4px;
    flex: 1;
  }
  &__regularList {
    width: 100%;
  }
  &__crossList {
    width: 100%;
    margin-top: 16px;
  }
  &__mainContent {
    width: 100%;
    flex: 1;
  }
  &__toggler {
    @extend %reset-btn;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    padding: 0 20px;
    font-size: 18px;
    line-height: 20px;
    font-weight: 500;
  }
}
</style>