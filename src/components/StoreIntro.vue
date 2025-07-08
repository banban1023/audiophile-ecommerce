<template>
  <div class="store">
    <!-- <img src="@/assets/shared/mobile/image-best-gear.jpg" alt="" class="store_img"> -->
    <div class="store_img"></div>
    <article class="store_intro">
      <h3 class="store_title">BRINGING YOU THE <span>BEST</span> AUDIO GEAR</h3>
      <p class="store_msg">
        Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
      </p>
    </article>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.store {
  padding: 0 24px;
  .store_img {
    width: 100%;
    border-radius: 8px;
    vertical-align: top;
    height: 300px;
    background: url('../assets/shared/mobile/image-best-gear.jpg') no-repeat center center / cover;
  }
  .store_intro {
    .store_title {
      margin-top: 40px;
      font-size: 28px;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 1px;
      span {
        color: #D87D4A;
      }
    }
    .store_msg {
      font-size: 15px;
      font-weight: 600;
      line-height: 25px;
      text-align: center;
      color: rgba(0, 0, 0, 0.5);
      margin-top: 32px;
    }
  }
}

@media (min-width: 768px) {
  .store {
    padding: 0 40px;
    .store_img {
      background: url('../assets/shared/tablet/image-best-gear.jpg') no-repeat center center / cover;
    }
    .store_intro {
      .store_title {
        margin: 63px auto 0;
        font-size: 40px;
        line-height: 44px;
        letter-spacing: 1.43px;
        width: 573px;
      }
      .store_msg {
        width: 573px;
        margin: 32px auto 0;
      }
    }
  }
}

@media (min-width: 1440px) {
  .store {
    padding: 0 165px;
    display: flex;
    flex-direction: row-reverse;
    height: 588px;
    justify-content: space-between;
    .store_img {
      width: 588px;
      height: 588px;
      background: url('../assets/shared/desktop/image-best-gear.jpg') no-repeat center center / cover;
    }
    .store_intro {
      display: flex;
      flex-direction: column;
      justify-content: center;
      .store_title {
        margin-top: 0;
        text-align: left;
        width: 445px;
      }
      .store_msg {
        text-align: left;
        width: 445px;
      }
    }
  }
}
</style>
