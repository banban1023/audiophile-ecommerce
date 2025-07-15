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
          to: '/headphones'
        },
        {
          img: require('@/assets/shared/desktop/image-category-thumbnail-speakers.png'),
          title: 'SPEAKERS',
          to: '/speakers'
        },
        {
          img: require('@/assets/shared/desktop/image-category-thumbnail-earphones.png'),
          title: 'EARPHONES',
          to: '/earphones'
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
    left: 50%;
    top: 32px;
    transform: translateX(-50%);
    margin-top: 50px;
    .black {
      position: absolute;
      width: 200px;
      height: 100px;
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
        &:hover {
          color: #D87D4A;
        }
        img {
          margin-left: 13px;
          display: inline-block;
        }
      }
    }
  }
}

@media (min-width: 768px) {
  .cate_card {
    display: flex;
    height: 100%;
    padding: 0 40px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    .little_card {
      top: 0;
      left: 0;
      transform: none;
      width: 100%;
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}

@media (min-width: 1440px) {
.cate_card {
  padding: 0 165px;
  .little_card {
    .pro_img {
      height: 160px;
      top: -80px;
    }
    .pro_bgc {
      height: 204px;
      .pto_title {
        top: 116px;
      }
      .pro_into {
        top: 156px;
      }
    }
  }
}
}
</style>
