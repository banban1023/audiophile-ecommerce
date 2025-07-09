<template>
  <div class="detail_card">
    <picture>
      <source
        media="(min-width: 1440px)"
        :srcset="item.image.desktop | fixAssetPath"
      >
      <source
        media="(min-width: 768px)"
        :srcset="item.image.tablet | fixAssetPath"
      >
      <img
        :src="item.image.mobile | fixAssetPath"
        class="de_img"
      >
    </picture>
    <article class="de_intro">
      <p class="de_subtitle" v-if="item.new">NEW PRODUCT</p>
      <h3 class="de_title">{{item.name}}</h3>
      <p class="de_msg">
        {{ item.description }}
      </p>
      <div class="de_price">
        $ {{item.price}}
      </div>
      <div class="addcard">
        <van-stepper v-model="addCount" />
        <button class="de_addcart">ADD TO CART</button>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  data () {
    return {
      addCount: 1 // 添加数量
    }
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
.detail_card {
  .de_img {
    width: 100%;
    max-width: 496px;
    vertical-align: top;
  }
  .de_intro {
    .de_subtitle {
      margin-top: 32px;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 10px;
      color: #D87D4A;
    }
    .de_title {
      font-size: 28px;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #000000;
      margin-top: 23px;
    }
    .de_msg {
      font-size: 15px;
      font-weight: 500;
      line-height: 25px;
      color: rgba(0, 0, 0, 0.5);
      margin-top: 24px;
    }
    .de_price {
      font-size: 18px;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 1.29px;
      margin-top: 24px;
    }
  }
  .addcard {
    margin-top: 31px;
    display: flex;
    ::v-deep(.van-stepper) { // 步进器
      width: 120px;
      height: 48px;
      .van-stepper__minus, .van-stepper__plus {
        height: 100%;
        margin: 0;
        border-radius: 0;
        width: 40px;
      }
      .van-stepper__input {
        height: 100%;
        margin: 0;
        width: 40px;
      }
      .van-stepper__minus::before,
      .van-stepper__plus::before {
        width: 5px;
        height: 1px;
      }
      .van-stepper__plus::after {
        height: 5px;
        width: 1px;
      }
    }
    .de_addcart {
      width: 160px;
      height: 48px;
      background: @origy-bgc;
      border: none;
      font-size: 13px;
      font-weight: bold;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #FFFFFF;
      margin-left: 16px;
    }
  }
}
@media (min-width: 768px) {
  .detail_card {
    display: flex;
    .de_img {
      height: 480px;
      width: 281px;
      margin-right: 69px;
    }
    .de_intro {
      align-self: center;
      .de_subtitle {
        margin: 0;
      }
      .de_title {
        width: 220px;
        font-size: 28px;
        margin-top: 16px;
      }
      .de_msg {
        margin-top: 32px;
      }
      .de_price {
        margin-top: 32px;
      }
    }
  }
}

@media (min-width: 1440px) {
  .detail_card {
    .de_img {
      width: 540px;
      margin-right: 125px;
    }
    .de_intro {
      .de_title {
        font-size: 40px;
        width: 300px;
      }
      .addcard {
        margin-top: 47px;
      }
    }
  }
}
</style>
