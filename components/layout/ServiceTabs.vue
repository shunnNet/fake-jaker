<template>
  <Tabs v-model="display" class="serviceTab" horizontal>
    <TabPane name="reserve">
      <div slot="label" class="serviceTab__pane">快速預約</div>
      <form @submit.prevent="">
        <CSelect
          name="field"
          :options="options"
          v-model="form.select"
          placeholder="台北市 大同區"
        >
          <template #prepend>
            <font-awesome-icon icon="map-marker-alt" class="c-field__icon" />
          </template>
        </CSelect>

        <CSelect
          name="field"
          :options="options"
          v-model="form.select"
          placeholder="3小時"
        >
          <template #prepend>
            <font-awesome-icon icon="clock" class="c-field__icon" />
          </template>
        </CSelect>

        <div class="c-field c-field--pet">
          <div class="c-field__wrap">
            <font-awesome-icon icon="paw" class="c-field__icon" />
            <span class="c-field__unit">家中有寵物?</span>
          </div>
            <CSwitch v-model="swi" />
        </div>

        <button type="submit" class="btn btn--primary serviceTab__submit">
          開始預約，查看清潔價格
        </button>
        <p class="serviceTab__foot">
          找約過的人員？<a class="serviceTab__inputPhone" href="#"
            >輸入您的手機號碼</a
          >
        </p>
      </form> </TabPane
    ><TabPane name="double" class=""
      ><div slot="label" class="serviceTab__pane">雙人快清</div>
      雙人快清 </TabPane
    ><TabPane name="specify" class=""
      ><div slot="label" class="serviceTab__pane">指定人員</div>
      指定人員</TabPane
    ><TabPane name="service" class=""
      ><div slot="label" class="serviceTab__pane">定期享優惠</div>
      定期享優惠</TabPane
    >
  </Tabs>
</template>

<script>
import Tabs from '@/components/libs/Tabs.vue'
import TabPane from '@/components/libs/TabPane.vue'
import CSwitch from '@/components/libs/CSwitch.vue'
import CSelect from '@/components/libs/form/CSelect.vue'

export default {
  data() {
    return {
      form: {
        select: '',
      },
      display: 'reserve',
      swi: false,
      options: [
        { label: '', value: '' },
        { label: 'option1', value: 'option1' },
        { label: 'option2', value: 'option2' },
        { label: 'option3', value: 'option3' },
        { label: 'option4', value: 'option4' },
      ],
    }
  },
  components: {
    TabPane,
    Tabs,
    CSwitch,
    CSelect,
  },
}
</script>

<style lang='scss'>
$active-bg-color: rgba(255, 255, 255, 0.8);

.serviceTab {
  width: 460px;
  .tab__label {
    padding: 8px 0;
    margin-right: 3px;
    border-radius: 4px 4px 0 0;
    background-color: #f5f4f4;
    text-align: center;
    cursor: pointer;
    user-select: none;
    color: #9b9b9b;
    font-weight: 500;

    &:last-child {
      margin-right: 0;
    }
    &:hover {
      color: color('primary');
    }
  }
  .tab__label--active {
    color: color('primary');
    background-color: $active-bg-color;
  }
  .tab__pane {
    padding: 30px 35px;
    background-color: $active-bg-color;
  }
}
.serviceTab {
  &__submit {
    width: 100%;
  }
  &__foot {
    font-size: 12px;
    line-height: 16px;
    margin-top: 8px;
    text-align: center;
  }
  &__inputPhone {
    @extend %reset-a;
    color: color('primary');
    &:hover {
      color: darken(color('primary'), 10%);
    }
  }
}
.serviceTab {
  .c-field {
    margin-bottom: 24px;
    &__wrap {
      border-radius: 4px;
      height: 44px;
      border: 1px solid #eeeeee;
      background-color: #ffffff;
      padding-right: 20px;
      padding-left: 12px;

    }
    &__icon {
      color: #bbb7ba;
      width: 15px;
      height: 15px;
      margin-right: 8px;
    }
    &__unit {

    }
  }
  .c-field--pet {
    .c-field__wrap {
      border: 1px solid transparent;
      background-color: transparent;
    }
    .c-field__unit {
      align-self: center;
    }
  }
}
</style>