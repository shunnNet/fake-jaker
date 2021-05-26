<template>
  <section class="services">
    <div class="services__wrap">
      <div class="servicesItem" v-for="(s, i) in services" :key="i">
        <ServiceCard class="servicesItem__inner" :options="s" />
      </div>
      <div class="servicesItem">
        <ServiceCardOther class="servicesItem__inner" :options="otherService" />
      </div>
    </div>
    <button type="button" class="btn btn--primary services__trigger">
      開始預約>
    </button>
  </section>
</template>

<script>
import ServiceCard from '@/components/layout/ServiceCard.vue'
import ServiceCardOther from '@/components/layout/ServiceCardOther.vue'
export default {
  data() {
    return {
      services: [
        {
          useSlide: false,
          img: require('@/assets/images/service_livingroom.jpg'),
          title: '客廳清潔',
          titleDesc: '',
          regularList: [
            { text: '沙發擦拭' },
            { text: '地毯除塵' },
            { text: '桌、櫃擦拭' },
            { text: '地板清潔' },
            { text: '燈具表面擦拭' },
            { text: '雜物整理' },
            { text: '垃圾打包' },
          ],
          regularListDesc: '',
          crossList: [
            { text: '沙發深層污漬' },
            { text: '地毯深層污漬' },
            { text: '天花板層板清潔' },
            { text: '吊燈清潔' },
          ],
          crossListDesc: '建議您與潔客可採用安全之方式拆下後，交由潔客做清洗。',
          minTimeText: '普通清潔',
          minTime: '0.5',
          maxTimeText: '空間大、許久未整理',
          maxTime: '1.5',
          timeDesc: {
            title: '',
            sub: '',
            desc: '',
          },
        },
        {
          useSlide: false,
          img: require('@/assets/images/service_bathroom.jpg'),
          title: '浴室清潔',
          titleDesc: '',
          regularList: [
            { text: '馬桶刷洗' },
            { text: '鏡面光亮' },
            { text: '浴缸清潔' },
            { text: '磁磚刷洗' },
            { text: '洗手檯面清潔' },
            { text: '浴門清潔' },
            { text: '垃圾打包' },
            { text: '清理水垢、皂垢' },
            { text: '局部小範圍除霉' },
          ],
          regularListDesc: '',
          crossList: [],
          crossListDesc: '',
          minTimeText: '普通清潔',
          minTime: '1',
          maxTimeText: '許久未清潔',
          maxTime: '1.5',
          timeDesc: {
            title: '全區除霉',
            sub: '+ 4hr',
            desc:
              '因需用漂白水敷於發霉處3~4小時，因此全區除霉將耗時至少4~8小時(若霉菌已深入內部，有可能無法完全清除乾淨)',
          },
        },
        {
          useSlide: false,
          img: require('@/assets/images/service_kitchen.jpg'),
          title: '廚房清潔',
          titleDesc: '',
          regularList: [
            { text: '牆面擦拭' },
            { text: '流理檯擦拭' },
            { text: '瓦斯爐台' },
            { text: '集油槽油污處理' },
            { text: '抽油煙機' },
            { text: '櫥櫃擦拭' },
            { text: '地板清潔' },
            { text: '冰箱外觀' },
            { text: '洗碗、水槽清潔' },
          ],
          regularListDesc: '',
          crossList: [{ text: '廚餘清理' }],
          crossListDesc: '',
          minTimeText: '普通清潔',
          minTime: '1',
          maxTimeText: '油污嚴重、許久未清潔',
          maxTime: '2.5',
          timeDesc: {
            title: '冰箱內部整理、清潔',
            sub: '+ 1 ~1.5hr',
            desc: '',
          },
        },
        {
          useSlide: false,
          img: require('@/assets/images/service_bedroom.jpg'),
          title: '臥室清潔',
          titleDesc: '',
          regularList: [
            { text: '衣櫃外觀擦拭' },
            { text: '桌面清潔' },
            { text: '棉被、衣物整理' },
            { text: '家電外觀擦拭' },
            { text: '地板清潔' },
            { text: '雜物整理' },
            { text: '床單換洗' },
            { text: '垃圾打包' },
          ],
          regularListDesc: '',
          crossList: [
            { text: '家電拆卸清洗' },
            { text: '整理衣櫃內部衣物' },
            { text: '移動、搬移床鋪' },
          ],
          crossListDesc: '',
          minTimeText: '普通清潔',
          minTime: '0.5',
          maxTimeText: '空間大、許久未整理',
          maxTime: '1.5',
          timeDesc: {
            title: '',
            sub: '',
            desc: '',
          },
        },
        {
          useSlide: false,
          img: require('@/assets/images/service_balcony.jpg'),
          title: '陽台清潔',
          titleDesc: '',
          regularList: [
            { text: '家電外觀擦拭' },
            { text: '水管擦拭' },
            { text: '地板刷洗' },
            { text: '曬衣桿擦拭' },
            { text: '雜物整理' },
          ],
          regularListDesc: '',
          crossList: [{ text: '除蟲害' }, { text: '園藝、花草照料' }],
          crossListDesc: '',
          minTimeText: '普通清潔',
          minTime: '1',
          maxTimeText: '空間大、許久未整理',
          maxTime: '1.5',
          timeDesc: {
            title: '',
            sub: '',
            desc: '',
          },
        },
      ],
      otherService: {
        useSlide: false,
        img: require('@/assets/images/service_wears.jpg'),
        title: '其他清潔',
        titleDesc: '非主要清潔內容，但可增加時數請清潔人員執行',
        mainContent: [
          {
            title: '窗戶清潔',
            titleSub: '+ 0.5hr/扇',
            regularList: [
              { text: '內側、底溝擦拭' },
              { text: '玻璃窗內部清洗' },
              { text: '紗窗內部清潔' },
            ],
            regularListDesc: '',
            crossList: [{ text: '拆卸窗戶清洗' }, { text: '拆窗簾、清洗' }],
            crossListDesc:
              '以安全為前提下，『兩位』服務人員以上才提供拆洗窗戶、紗窗的服務，或者您可以自行拆下，再由服務人員做清洗',
          },
          {
            title: '衣物洗曬',
            titleSub: '+ 1~2 hr',
            regularList: [
              { text: '衣物清洗' },
              { text: '衣物晾曬' },
              { text: '需備有洗衣機' },
            ],
            regularListDesc: '',
            crossList: [
              { text: '特殊清洗衣物(乾洗)' },
              { text: '手洗衣物' },
              { text: '整燙衣物' },
            ],
            crossListDesc: '',
          },
        ],
      },
    }
  },

  methods: {
    useSlideIfNotMatchBp(match) {
      this.services.forEach((item) => (item.useSlide = !match))
      this.otherService.useSlide = !match
    },
  },
  mounted() {
    this.$watchMedia('1200', this.useSlideIfNotMatchBp)
  },
  beforeDestroy() {
    this.$unwatchMedia('1200', this.useSlideIfNotMatchBp)
  },
  components: {
    ServiceCard,
    ServiceCardOther,
  },
}
</script>

<style lang='scss'>
.services {
  margin: 0 auto;
  margin-top: 20px;
  max-width: 1080px;
  width: 100%;

  &__wrap {
    display: block;
  }

  &__trigger {
    margin-top: 32px;
    width: 100%;
    max-width: 300px;
  }
  @include xl {
    margin-top: 50px;
    &__wrap {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      margin: -10px -12px;
      height: 920px;
    }
    &__trigger {
      margin-top: 50px;
    }
  }
}
.servicesItem {
  margin: 0 auto;
  margin-top: 20px;
  max-width: 343px;

  @include xl {
    width: 33%;
    max-width: 100%;
    flex: 1 1 300px;
    margin-top: 0;
    padding: 10px 12px;
    &__inner {
      height: 100%;
    }
  }
}
</style>