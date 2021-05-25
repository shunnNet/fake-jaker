<template>
<div></div>  
</template>

<script>
import List from '~/components/libs/List.vue'
import Star from '@/components/Star.vue'
import RankList from '@/components/RankList.vue'
import RankCard from '@/components/layout/RankCard.vue'
import ServiceTabs from '@/components/layout/ServiceTabs.vue'


export default {
  data() {
    return {
      display: 'reserve',
      swi: false,
    }
  },
  components: {
    ServiceTabs,
    List,
    RankList,
    Star,
    RankCard,
    
  },
  mounted() {},
}
</script>

<style lang="scss">

</style>
