<template functional>
  <article class="rankCard">
    <img
      :src="props.rankInfo.url"
      :alt="props.rankInfo.name"
      class="rankCard__img"
    />
    <span class="rankCard__title"> {{ props.rankInfo.location }} </span>
    <span class="rankCard__sub">{{ props.rankInfo.name }}</span>

    <RankList class="rankCard__rank" :rank="props.rankInfo.rank" />

    <span class="rankCard__price"> {{ props.rankInfo.price }} </span>
  </article>
</template>

<script>
export default {
  props: {
    rankInfo: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang='scss'>
.rankCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 140px;
  height: 190px;
  font-size: 14px;
  background-color: #ffffff;
  border-radius: 4px;
  padding: 16px 0;
  &__img {
    border-radius: 50%;
    width: 55px;
    height: 55px;
  }
  &__title {
    margin-top: 8px;
  }
  &__sub {
    font-size: 12px;
    color: color(primary);
  }
  &__rank {
    margin-top: 6px;
    color: #9b9b9b;
  }
  &__price {
    margin-top: 18px;
  }
}
</style>