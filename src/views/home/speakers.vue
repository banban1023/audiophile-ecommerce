<template>
  <div class="speakers">
    <header>
      <h2 class="speakers_title">SPEAKERS</h2>
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
  name: 'SpeakersView',
  components: {
    GoodsCard, LittleCard, StoreShare, StoreIntro
  },
  data () {
    return {
      goodsList: [
        {
          img: {
            mobile: require('@/assets/shared/tablet/image-zx9-speaker.jpg'),
            tablet: require('@/assets/shared/mobile/image-zx9-speaker.jpg'),
            desktop: require('@/assets/shared/desktop/image-zx9-speaker.jpg')
          },
          subtitle: 'NEW PRODUCT',
          title: 'ZX9 speaker',
          msg: 'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.'
        },
        {
          img: {
            mobile: require('@/assets/shared/tablet/image-zx7-speaker.jpg'),
            tablet: require('@/assets/shared/mobile/image-zx7-speaker.jpg'),
            desktop: require('@/assets/shared/desktop/image-zx7-speaker.jpg')
          },
          title: 'ZX7 SPEAKER',
          msg: 'Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
@import '@/styles/speakers.less';
</style>
