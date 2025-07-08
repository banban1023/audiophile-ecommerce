<template>
  <div class="headphones">
    <header>
      <h2 class="headphones_title">HEADPHONES</h2>
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
  name: 'HeadPhones',
  components: {
    GoodsCard, LittleCard, StoreShare, StoreIntro
  },
  data () {
    return {
      goodsList: [
        {
          img: {
            mobile: require('@/assets/shared/tablet/image-xx99-mark-two-headphones.jpg'),
            tablet: require('@/assets/shared/mobile/image-xx99-mark-two-headphones.jpg'),
            desktop: require('@/assets/shared/desktop/image-xx99-mark-two-headphones.jpg')
          },
          subtitle: 'NEW PRODUCT',
          title: 'XX99 MARK II HEADPHONES',
          msg: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.'
        },
        {
          img: {
            mobile: require('@/assets/shared/tablet/image-xx99-mark-one-headphones.jpg'),
            tablet: require('@/assets/shared/mobile/image-xx99-mark-one-headphones.jpg'),
            desktop: require('@/assets/shared/desktop/image-xx99-mark-one-headphones.jpg')
          },
          title: 'XX99 Mark I Headphones',
          msg: 'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.'
        },
        {
          img: {
            mobile: require('@/assets/shared/tablet/image-xx59-headphones.jpg'),
            tablet: require('@/assets/shared/mobile/image-xx59-headphones.jpg'),
            desktop: require('@/assets/shared/desktop/image-xx59-headphones.jpg')
          },
          title: 'XX59 Headphones',
          msg: 'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
@import '@/styles/headphones.less';
</style>
