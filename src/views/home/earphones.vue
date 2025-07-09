<template>
  <div class="earphones">
    <header>
      <h2 class="earphones_title">EARPHONES</h2>
    </header>
    <main>
      <GoodsCard v-for="item in goodsList" :key="item.title" :item="item"></GoodsCard>
      <LittleCard></LittleCard>
    </main>
    <footer>
      <StoreIntro></StoreIntro>
      <StoreShare></StoreShare>
    </footer>
  </div>
</template>

<script>
import GoodsCard from '@/components/GoodsCard.vue'
import LittleCard from '@/components/LittleCard.vue'
import StoreShare from '@/components/StoreShare.vue'
import StoreIntro from '@/components/StoreIntro.vue'
export default {
  name: 'EarphonesView',
  components: {
    GoodsCard, LittleCard, StoreShare, StoreIntro
  },
  data () {
    return {
      goodsList: [
        {
          id: 1,
          img: {
            mobile: require('@/assets/product-yx1-earphones/mobile/image-category-page-preview.jpg'),
            tablet: require('@/assets/product-yx1-earphones/tablet/image-category-page-preview.jpg'),
            desktop: require('@/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg')
          },
          subtitle: 'NEW PRODUCT',
          title: 'YX1 WIRELESS EARPHONES',
          msg: 'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
@import '@/styles/earphones.less';
</style>
