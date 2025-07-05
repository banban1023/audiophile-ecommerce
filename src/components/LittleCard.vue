<template>
  <div class="cate_card">
    <div
      class="little_card"
      v-for="item in cateList"
      :key="item.title"
    >
      <img src="@/assets/shared/desktop/Oval Copy 4.png" alt="" class="black">
      <img :src="item.img" alt="" class="pro_img">
      <div class="pro_bgc">
        <h4 class="pto_title">{{item.title}}</h4>
        <router-link :to="item.to" class="pro_into">SHOP <img src="@/assets/shared/desktop/icon-arrow-right.svg" alt="" class="right"></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cateList: [
        {
          img: require('@/assets/shared/desktop/image-category-thumbnail-headphones.png'),
          title: 'HEADPHONES',
          to: 'headphones'
        },
        {
          img: require('@/assets/shared/desktop/image-category-thumbnail-speakers.png'),
          title: 'SPEAKERS',
          to: 'speakers'
        },
        {
          img: require('@/assets/shared/desktop/image-category-thumbnail-earphones.png'),
          title: 'EARPHONES',
          to: 'earphones'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.cate_card {
  height: 670px;
  .little_card {
    position: relative;
    width: 327px;
    // height: 217px;
    left: 50%;
    top: 32px;
    transform: translateX(-50%);
    margin-top: 50px;
    .black {
      position: absolute;
      width: 200px;
      height: 100px;
      // filter: blur(43.49px);
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
    }
    .pro_img {
      height: 104px;
      position: absolute;
      top: -35px;
      left: 50%;
      transform: translateX(-50%);
    }
    .pro_bgc {
      width: 100%;
      background-color: #f1f1f1;
      height: 165px;
      border-radius: 8px;
      .pto_title {
        position: absolute;
        left: 50%;
        top: 88px;
        transform: translateX(-50%);
        font-size: 15px;
        letter-spacing: 1.07px;
      }
      .pro_into {
        position: absolute;
        top: 125px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 13px;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: rgba(0, 0, 0, 0.5);
        background-color: transparent;
        border: none;
        display: flex;
        align-items: center;
        img {
          margin-left: 13px;
          display: inline-block;
        }
      }
    }
  }
}
</style>
