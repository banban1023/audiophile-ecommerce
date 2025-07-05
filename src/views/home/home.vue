<template>
  <div class="home">
    <header>
      <article class="product_intro">
        <h3 class="new_pro">NEW PRODUCT</h3>
        <h2 class="pro_name">XX99 Mark II HeadphoneS</h2>
        <p class="pro_msg">
          Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
        </p>
        <button class="see_pro">SEE PRODUCT</button>
      </article>
    </header>
    <section class="home_category">
      <LittleCard></LittleCard>
    </section>
    <section class="home_see">
      <div class="pro_one">
        <img src="@/assets/home/desktop/pattern-circles.svg" alt="" class="pattern_circles">
        <img class="see_img" src="@/assets/home/mobile/image-speaker-zx9.png" alt="">
        <h2 class="see_title">ZX9 <br> SPEAKER</h2>
        <p class="see_msg">
          Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
        </p>
        <button class="see_pro">SEE PRODUCT</button>
      </div>
      <div class="pro_two">
        <img src="@/assets/home/mobile/image-speaker-zx7.jpg" alt="" class="see_img">
        <h2 class="see_title">ZX7 SPEAKER</h2>
        <button class="see_pro">SEE PRODUCT</button>
      </div>
      <div class="pro_three">
        <img src="@/assets/home/mobile/image-earphones-yx1.jpg" alt="" class="see_img">
        <div class="pro_intro">
          <h2 class="see_title">YX1 EARPHONES</h2>
          <button class="see_pro">SEE PRODUCT</button>
        </div>
      </div>
    </section>
    <!-- <section class="home_intro">intro</section> -->
    <footer></footer>
  </div>
</template>

<script>
import LittleCard from '@/components/LittleCard.vue'
export default {
  name: 'HomeView',
  components: {
    LittleCard
  }
}
</script>

<style lang="less" scoped>
@import '@/styles/home.less';
</style>
