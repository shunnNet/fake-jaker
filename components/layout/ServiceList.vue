<template>
  <div class="serviceListA">
    <List :list="list" #default="{ item }" class="serviceListA__list">
      <IconText :icon="icon" class="serviceListA__iconText"> {{ item.text }} </IconText>
    </List>
    <p class="serviceListA__desc" v-if="desc">{{ desc }}</p>
  </div>
</template>

<script>
import List from '~/components/libs/List.vue'
export default {
  props: {
    list: Array,
    icon: String,
    desc: String,
  },
  components: {
    List,
  },
}
</script>

<style lang='scss'>
.serviceListA {
  font-size: 14px;
  line-height: 16px;
  &__list {
    display: flex;
    flex-wrap: wrap;
    .list__item {
      width: 50%;
      margin-bottom: 8px;
      
    }
  }
  &__desc {
    margin-top: -4px;
    color: #9b9b9b;
    font-size: 12px;
    line-height: 14px;
    padding-left: 1em;
  }
  &__iconText {
    padding-left: 1em;
  }
}
</style>