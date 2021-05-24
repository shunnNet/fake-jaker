<template>
  <div class="container">
    <div>
      <a href="#fredf" class="testIcon">132456789456136</a>
      <FaIconText class="testIcon" icon="user-shield" :icon-class="'testIcon'">
        找打掃
      </FaIconText>
      <div class="testBox box">123456789</div>
      <Arrow />
      <!-- <Swiper>
        <SwiperSlide>123</SwiperSlide>
        <SwiperSlide>456</SwiperSlide>
        <SwiperSlide>789</SwiperSlide>
      </Swiper> -->
    </div>
    <div>
      <!-- <FaIconText reverse> 企業清潔 </FaIconText> -->
    </div>
  </div>
</template>

<script>
import FaIconText from '@/components/libs/FaIconText.vue'
// import { watchMedia } from '@/plugins/mediaStore.js'

// watchMedia('992', () => {
//   console.log('992')
// })

export default {
  components: {
    FaIconText,
  },
  mounted() {
    this.$watchMedia('992', () => {
      console.log(`%c 992 `, 'background: lightseagreen; color: #fff')
    })
  },
}
</script>

<style lang="scss">
.testBox {
  width: 90%;
}
.testIcon {
  @extend %linkImage;
  display: flex;
  max-height: 200px;
}
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
