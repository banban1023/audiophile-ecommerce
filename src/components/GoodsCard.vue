<template>
  <div class="goodscard">
    <picture>
      <source
        media="(min-width: 1440px)"
        :srcset="item.img.desktop"
      >
      <source
        media="(min-width: 768px)"
        :srcset="item.img.tablet"
      >
      <img
        :src="item.img.mobile"
        class="goods_img"
      >
    </picture>
    <article class="goods_intro">
      <p class="goods_subtitle" v-if="item.subtitle">{{item.subtitle}}</p>
      <h3 class="goods_title">{{item.title}}</h3>
      <p class="goods_msg">
        {{item.msg}}
      </p>
      <button @click="$router.push(`/detail/${item.id}`)" class="goods_godetail">SEE PRODUCT</button>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
.goodscard {
  display: flex;
  flex-direction: column;
  align-items: center;
  .goods_img {
    align-self: center;
    max-width: 445px;
    width: 327px;
    height: 352px;
    object-fit: cover;
    vertical-align: top;
  }
  .goods_intro {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .goods_subtitle {
      font-size: 14px;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 10px;
      color: @origy-bgc;
    }
    .goods_title {
      font-size: 28px;
      font-weight: bold;
      line-height: normal;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-top: 23px;
    }
    .goods_msg {
      font-size: 15px;
      line-height: 25px;
      text-align: center;
      font-weight: 500;
      letter-spacing: normal;
      color: rgba(0, 0, 0, 0.5);
      margin-top: 24px;
    }
  }
  .goods_godetail {
    width: 160px;
    height: 48px;
    background-color: @origy-bgc;
    font-size: 13px;
    font-weight: bold;
    line-height: normal;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #FFFFFF;
    border: none;
    margin-top: 24px;
    cursor: pointer;
    &:hover {
      background: #FBAF85;
    }
  }
}

@media (min-width: 768px) {
  .goodscard {
    .goods_img {
      max-width: 689px;
      width: 100%;
      height: 352px;
      object-fit: cover;
    }
    .goods_intro {
      width: 572px;
      margin-top: 52px;
      .goods_title {
        margin-top: 15px;
        font-size: 40px;
        line-height: 44px;
        text-transform: uppercase;
        letter-spacing: 1.43px;
        width: 370px;
      }
      .goods_msg {
        margin-top: 32px;
      }
    }
  }
}

@media (min-width: 1440px) {
  .goodscard {
    .goods_img {
      height: 560px;
      width: 540px;
    }
    .goods_intro {
      width: 445px;
      align-items: flex-start;
      .goods_subtitle, .goods_title, .goods_msg {
        text-align: left;
      }
    }
  }
}
</style>
