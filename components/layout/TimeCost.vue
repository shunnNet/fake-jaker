<template >
  <div class="timecost">
    <div class="timecost__clock costClock">
      <AccessTime />
      <span class="costClock__desc">
        {{ options.minTime }} ~ {{ options.maxTime }}
      </span>
    </div>
    <TimeLine
      class="timecost__line"
      :options="{
        min: { top: options.minTimeText, bottom: `${options.minTime} hr` },
        max: { top: options.maxTimeText, bottom: `${options.maxTime} hr` },
      }"
    />
    <IconTitle
      class="timecost__desc"
      icon="Plus"
      :narrow="true"
      v-if="options.timeDesc.title"
      v-bind="options.timeDesc"
    />
  </div>
</template>

<script>
import TimeLine from '@/components/layout/TimeLine.vue'
import IconTitle from '@/components/layout/ServiceTitle.vue'

export default {
  props: {
    options: {
      type: Object,
      required: true,
    },
  },

  components: {
    TimeLine,
    IconTitle,
  },
}
</script>

<style lang='scss'>
.timecost {
  display: grid;
  width: 100%;
  grid-template-columns: 70px 1fr;
  grid-template-areas:
    'clock line'
    'blank desc';
  &__clock {
    grid-area: clock;
    font-size: 14px;
    line-height: 1;
  }
  &__line {
    grid-area: line;
    flex: 1;
    margin-left: 8px;
    font-size: 12px;
    line-height: 14px;
  }
  &__desc {
    grid-area: desc;
  }
}

.costClock {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 70px;

}
</style>