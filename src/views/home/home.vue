<template>
  <div class="home">
    <header>
      <article class="product_intro">
        <h3 class="new_pro">NEW PRODUCT</h3>
        <h2 class="pro_name">XX99 Mark II HeadphoneS</h2>
        <p class="pro_msg">
          Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
        </p>
        <button class="see_pro1">SEE PRODUCT</button>
      </article>
    </header>
    <section class="home_category">
      <LittleCard></LittleCard>
    </section>
    <section class="home_see">
      <div class="pro_one">
        <div class="see_img"></div>
        <h2 class="see_title">ZX9 <br> SPEAKER</h2>
        <p class="see_msg">
          Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
        </p>
        <button class="see_pro">SEE PRODUCT</button>
        <img src="@/assets/home/desktop/pattern-circles.svg" alt="" class="pattern_circles">
      </div>
      <div class="pro_two">
        <div class="see_img"></div>
        <h2 class="see_title">ZX7 SPEAKER</h2>
        <button class="see_pro">SEE PRODUCT</button>
      </div>
      <div class="pro_three">
        <div class="see_img"></div>
        <div class="pro_intro">
          <h2 class="see_title">YX1 EARPHONES</h2>
          <button class="see_pro">SEE PRODUCT</button>
        </div>
      </div>
    </section>
    <footer>
      <StoreIntro></StoreIntro>
      <StoreShare></StoreShare>
    </footer>
  </div>
</template>

<script>
import LittleCard from '@/components/LittleCard.vue'
import StoreIntro from '@/components/StoreIntro.vue'
import StoreShare from '@/components/StoreShare.vue'
export default {
  name: 'HomeView',
  components: {
    LittleCard, StoreIntro, StoreShare
  }
}
</script>

<style lang="less" scoped>
@import '@/styles/home.less';
</style>
