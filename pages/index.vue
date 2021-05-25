<template>
  <div class="container">
    <FaIconText class="testIcon" icon="user-shield" :icon-class="'testIcon'">
      找打掃
    </FaIconText>
    <List
      :list="[
        { content: 'A', icon: 'CircleSolid' },
        { content: 'B' },
        { content: 'C' },
      ]"
      #default="{ item }"
    >
      <IconText :icon="item.icon || 'RedCross'">
        {{ item.content }}
      </IconText>
    </List>
  </div>
</template>

<script>
import List from '~/components/libs/List.vue'

export default {
  components: {
    List,
  },
  mounted() {},
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  /* display: flex;
  justify-content: center;
  align-items: center;
  text-align: center; */
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
