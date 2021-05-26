<template>
  <main class="pgIndex">
    <section class="entryBanner">
      <div class="entryBanner__wrap">
        <h2 class="entryBanner__title">
          <span>預約居家清潔<span class="entryBanner__spliter">，</span></span>
          <span>三分鐘馬上搞定！</span>
        </h2>
        <ServiceTabs class="entryBanner__tabs" />
      </div>
    </section>
    <section class="clockBanner">
      <IconText icon="Bottle" class="clockBanner__title"
        >鐘點清潔會掃哪裡?時數怎麼算?</IconText
      >
      <p class="clockBanner__sub">
        可以根據自己的需求查看會清潔的細項，並預估總共需要的時數，當天清潔人員會再討論狀況做些調整！
      </p>
      <button type="button" class="btn btn--light clockBanner__trigger">
        時數計算教學
      </button>
    </section>
    <section class="serviceList">
      <div class="box">
        <button type="button" class="btn btn--primary serviceList__trigger">
          開始預約>
        </button>
      </div>
    </section>
    <section class="others">
      <div class="box">
        <h2 class="others__title">其他未服務內容</h2>
        <span class="others__sub">基於人員與客戶安全、隱私等考量</span>
        <div class="others__listGroup">
          <List :list="others[0]" #default="{ item }">
            <IconText icon="CircleSolid">{{ item.text }}</IconText>
          </List>
          <List :list="others[1]" #default="{ item }">
            <IconText icon="CircleSolid">{{ item.text }}</IconText>
          </List>
        </div>
      </div>
    </section>
    <section class="rankBanner">
      <div class="rankBanner__content">
        <header class="rankBanner__header">
          <h2 class="rankBanner__title">全台唯一</h2>
          <span class="rankBanner__sub">挑人員，評價直接看！</span>
        </header>
        <template v-if="use === 'swiper'">
          <Swiper :options="swiperOptions">
            <SwiperSlide v-for="(item, i) in rankList" :key="i">
              <RankCard :rank-info="item" />
            </SwiperSlide>
          </Swiper>
        </template>
        <div class="rankBanner__fCardGroup">
          <section
            class="featureCard"
            v-for="adv in advantages"
            :key="adv.text"
          >
            <img class="featureCard__img" :src="adv.img" />
            <p class="featureCard__desc">
              <span>{{ adv.text1 }}</span>
              <span>{{ adv.text2 }}</span>
            </p>
          </section>
        </div>
      </div>
      <div class="rankBanner__cardGroup" v-if="use === 'grid'">
        <RankCard
          class="rankBanner__rankCard"
          v-for="(item, i) in rankList"
          :key="i"
          :rank-info="item"
        />
      </div>

      <button type="button" class="btn btn--primary rankBanner__trigger">
        開始預約>
      </button>
    </section>
  </main>
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
      use: '',
      display: 'reserve',
      swi: false,
      swiperOptions: {
        slidesPerView: 'auto',
        spaceBetween: 10,
      },
      rankList: [
        {
          url: require('@/assets/images/person1.jpg'),
          name: '潔客＊',
          location: '台北市',
          rank: 4.7,
          price: '$500/hr',
        },
        {
          url: require('@/assets/images/person2.jpg'),
          name: '刻刻＊',
          location: '台北市',
          rank: 4.7,
          price: '$500/hr',
        },
        {
          url: require('@/assets/images/person3.jpg'),
          name: '啊潔＊',
          location: '台北市',
          rank: 4.7,
          price: '$500/hr',
        },
        {
          url: require('@/assets/images/person4.jpg'),
          name: '張碧＊',
          location: '台北市',
          rank: 4.7,
          price: '$500/hr',
        },
        {
          url: require('@/assets/images/person1.jpg'),
          name: '潔客＊',
          location: '台北市',
          rank: 4.7,
          price: '$500/hr',
        },
        {
          url: require('@/assets/images/person2.jpg'),
          name: '刻刻＊',
          location: '台北市',
          rank: 4.7,
          price: '$500/hr',
        },
        {
          url: require('@/assets/images/person3.jpg'),
          name: '啊潔＊',
          location: '台北市',
          rank: 4.7,
          price: '$500/hr',
        },
        {
          url: require('@/assets/images/person4.jpg'),
          name: '張碧＊',
          location: '台北市',
          rank: 4.7,
          price: '$500/hr',
        },
      ],
      advantages: [
        {
          img: require('@/assets/images/advantage1.png'),
          text1: '今天訂明天掃',
          text2: '即時預約超方便',
        },
        {
          img: require('@/assets/images/advantage2.png'),
          text1: '人員具良民證、',
          text2: '清潔證照',
        },
        {
          img: require('@/assets/images/advantage3.png'),
          text1: '價錢、履歷、評價',
          text2: '透明公開',
        },
      ],
      others: [
        [
          { text: '移動或抬起超過10公斤的大型家具或重物' },
          { text: '天花板、高處窗戶及可觸及範圍外的表面清潔' },
          { text: '無危險性外窗清潔及窗簾、紗窗清洗' },
          { text: '寵物排泄及重度汙染區域清潔' },
          { text: '危險化學物質處理' },
          { text: '地毯深度清潔及清洗（基本除塵除外）' },
        ],
        [
          { text: '各式陳年、染色汙點清潔' },
          { text: '除蟲害（例如：蜂窩、昆蟲…等）' },
          { text: '垃圾清運工作（不指使潔客將已包裝垃圾移至其他地方丟棄）' },
          { text: '室內惡臭環境' },
          { text: '車庫清潔（基本掃除除外）園藝或院子清潔。' },
        ],
      ],
    }
  },

  components: {
    ServiceTabs,
    List,
    RankList,
    Star,
    RankCard,
  },
  mounted() {
    this.$watchMedia('992', this.watchMedia)
  },
  methods: {
    watchMedia(match) {
      this.use = match ? 'grid' : 'swiper'
    },
  },
  beforeDestroy() {
    this.$unwatchMedia('992', this.watchMedia)
  },
}
</script>

<style lang="scss">
.entryBanner {
  display: flex;
  justify-content: center;
  min-height: 525px;
  padding: 8px;
  padding-top: 65px;
  padding-bottom: 14px;
  background-image: url('@/assets/images/indexBanner.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  @include lg {
    padding-top: 60px;
    min-height: 600px;
    background-image: url('@/assets/images/indexBanner-lg.png');
  }
  &__wrap {
    max-width: 480px;
    width: 100%;
  }
  &__title {
    margin-left: 8px;
    font-size: 36px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    @include lg {
      font-size: 32px;
      margin-left: -8px;
      display: block;
    }
  }
  &__spliter {
    display: none;
    @include lg {
      display: inline;
    }
  }
  &__tabs {
    margin-top: 32px;
  }
}
.clockBanner {
  margin-top: 40px;
  padding: 0 16px;
  text-align: center;
  font-size: 14px;

  &__title {
    font-size: 18px;
    font-weight: 500;
  }
  &__sub {
    margin-top: 8px;
  }
  &__trigger {
    width: 140px;
    margin-top: 12px;
  }
  @include lg {
    &__title {
      font-size: 32px;
    }
    &__trigger {
      margin-top: 16px;
    }
  }
}

.serviceList {
  margin-top: 20px;

  &__trigger {
    margin-top: 32px;
    width: 100%;
    max-width: 300px;
  }
  @include lg {
    margin-top: 50px;
    &__trigger {
      margin-top: 50px;
    }
  }
}
.others {
  margin-top: 32px;
  background-color: #fff;
  padding: 40px 32px;
  font-size: 14px;
  &__title {
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    @include lg {
      font-size: 32px;
    }
  }
  &__sub {
    display: block;
    margin-top: 6px;
    font-weight: 500;
    text-align: center;
    color: color('danger');
    @include lg {
      margin-top: 0;
      font-weight: 400;
    }
  }
  &__listGroup {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
    margin-top: 22px;
    line-height: 24px;
    @include lg {
      justify-content: space-between;
      flex-direction: row;
      margin-top: 20px;
      max-width: 923px;
    }
  }
  &__list {
    @include lg {
      flex: 1;
    }
  }
}
.rankBanner {
  margin-top: 24px;
  padding: 0 16px;
  @include lg {
    display: flex;
    width: 100%;
    margin: 0 auto;
    margin-top: 24px;
    max-width: 1200px;
  }

  &__content {
    @include lg {
      flex: 1 0 501px;
      margin-right: 50px;
    }
  }
  &__cardGroup {
    @include lg {
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
    }
  }
  &__header {
    text-align: center;
    padding-bottom: 17px;
    @include lg {
      border-bottom: 2px solid #3e4459;
    }
  }
  &__title {
    font-size: 18px;
    font-weight: 900;
    @include lg {
      font-size: 72px;
      font-weight: 400;
    }
  }
  &__sub {
    font-size: 18px;
    font-weight: 900;
    @include lg {
      margin-top: 21px;
      font-size: 36px;
      font-weight: 400;
    }
  }
  &__trigger {
    margin-top: 32px;
    width: 100%;
    max-width: 300px;
    @include lg {
      display: none;
    }
  }
  &__fCardGroup {
    @include lg {
      display: flex;
    }
  }
  &__rankCard {
    @include lg {
      margin-bottom: 16px;
      margin-right: 8px;
    }
  }
}
.featureCard {
  display: flex;
  align-items: center;
  font-size: 14px;
  max-width: 250px;
  margin: 0 auto;
  margin-top: 20px;
  @include lg {
    flex-direction: column;
  }
  &__img {
    margin-right: 8px;
    width: 30px;
    height: 30px;
    @include lg {
      width: 110px;
      height: 110px;
    }
  }
  &__desc {
    display: block;
    @include lg {
      display: flex;
      flex-direction: column;
      margin-top: 12px;
      text-align: center;
    }
  }
}

.swiper-slide {
  width: auto !important;
}
.pgIndex {
  padding-bottom: 50px;
}
</style>
