<template >
  <nav class="mainNav">
    <div class="box mainNav__wrap">
      <nuxt-link :to="{ name: 'index' }" class="mainNav__logo"
        >Jackercleaning 潔客幫</nuxt-link
      >
      <ul class="mainMenu">
        <nuxt-link tag="li" :to="{ name: 'index' }" class="mainMenu__item">
          <FaIconText icon="home"> 找打掃 </FaIconText>
        </nuxt-link>
        <nuxt-link tag="li" :to="{ name: 'index' }" class="mainMenu__item">
          <FaIconText icon="briefcase"> 企業清潔 </FaIconText>
        </nuxt-link>
        <nuxt-link tag="li" :to="{ name: 'index' }" class="mainMenu__item">
          全部服務
        </nuxt-link>
        <nuxt-link
          tag="li"
          :to="{ name: 'index' }"
          class="mainMenu__item mainMenu__item--partner"
        >
          成為潔客
        </nuxt-link>
        <nuxt-link tag="li" :to="{ name: 'index' }" class="mainMenu__item">
          生活知識站
        </nuxt-link>
        <nuxt-link
          tag="li"
          :to="{ name: 'index' }"
          class="mainMenu__item mainMenu__item--login"
        >
          註冊登入
        </nuxt-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style lang='scss'>
.mainNav {
  box-shadow: 0px 2px 4px 2px rgb(229 229 229 / 50%);

  background-color: #fff;

  &__wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;

    min-height: 65px;
  }
  &__logo {
    @include hide-text();
    width: 222px;
    height: 45px;
    background-image: url('@/assets/images/logo.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
}
.mainMenu {
  position: absolute;
  display: none;
  font-size: 14px;
  &__item {
    @extend %reset-a;
    @extend %rounded-button-like;

    color: #808080;
    border: 1px solid transparent;
    cursor: pointer;
    user-select: none;

    &--partner {
      color: color('primary') !important;
    }
    &--login {
      color: color('primary');
      border: 1px solid color('primary');
    }
    &:hover {
      border: 1px solid transparent;
      color: #808080;
      background-color: #eee;
    }
  }
  @include lg {
    position: static;
    display: flex;
    &__item {
      margin-right: 4px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>