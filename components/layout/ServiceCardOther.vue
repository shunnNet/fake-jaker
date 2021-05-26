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
        <IconTitle
          class="serviceCard__title"
          :title="options.title"
          :desc="options.titleDesc"
        />
        <div
          class="serviceCard__mainContent"
          v-for="(group, i) in options.mainContent"
          :key="i"
        >
          <IconTitle
            class="serviceCard__title"
            icon="Plus"
            :title="group.title"
            :sub="group.titleSub"
            :desc="group.titleDesc"
          />
          <ServiceList
            class="serviceCard__regularList"
            icon="CircleSolid"
            :list="group.regularList"
            :desc="group.regularListDesc"
          />
          <ServiceList
            class="serviceCard__crossList"
            icon="RedCross"
            :list="group.crossList"
            :desc="group.crossListDesc"
          />
        </div>
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
import ServiceCard from '@/components/layout/ServiceCard.vue'

export default {
  extends: ServiceCard,
}
</script>
