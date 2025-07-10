<template>
  <div class="detail">
    <header>
      <NavCom></NavCom>
    </header>
    <main v-if="goodsDetail" >
      <button class="detail_back" @click="$router.go(-1)">Go Back</button>
      <DetailCard :item="goodsDetail"></DetailCard>
      <section class="desk--flex">
        <article class="de_features">
          <h3 class="features_title">FEATURES</h3>
          <p v-if="goodsDetail" class="features_msg" v-html="formatFeatures(goodsDetail.features)">
          </p>
        </article>
        <section class="de_box">
          <h3 class="box_title">IN THE BOX</h3>
          <ul class="box_contain">
            <li v-for="item in goodsDetail.includes" :key="item.item">
              <span>{{item.quantity}}x</span>{{item.item}}
            </li>
          </ul>
        </section>
      </section>
      <section class="de_img">
        <picture class="img_one">
          <source
            media="(min-width: 1440px)"
            :srcset="goodsDetail.gallery.first.desktop | fixAssetPath"
          >
          <source
            media="(min-width: 768px)"
            :srcset="goodsDetail.gallery.first.tablet | fixAssetPath"
          >
          <img
            :src="goodsDetail.gallery.first.mobile | fixAssetPath"
            class="img_nei"
          >
        </picture>
        <picture class="img_two">
          <source
            media="(min-width: 1440px)"
            :srcset="goodsDetail.gallery.second.desktop | fixAssetPath"
          >
          <source
            media="(min-width: 768px)"
            :srcset="goodsDetail.gallery.second.tablet | fixAssetPath"
          >
          <img
            :src="goodsDetail.gallery.second.mobile | fixAssetPath"
            class="img_nei"
          >
        </picture>
        <picture class="img_three">
          <source
            media="(min-width: 1440px)"
            :srcset="goodsDetail.gallery.third.desktop | fixAssetPath"
          >
          <source
            media="(min-width: 768px)"
            :srcset="goodsDetail.gallery.third.tablet | fixAssetPath"
          >
          <img
            :src="goodsDetail.gallery.third.mobile | fixAssetPath"
            class="img_nei"
          >
        </picture>
      </section>
      <section class="may_like">
        <h3 class="like_title">YOU MAY ALSO LIKE</h3>
        <div class="like_list">
          <MayLike v-for="(item, index) in goodsDetail.others" :key="index" :item="item" />
        </div>
      </section>
    </main>
    <footer>
      <LittleCard></LittleCard>
      <StoreIntro></StoreIntro>
      <StoreShare></StoreShare>
    </footer>
  </div>
</template>

<script>
import NavCom from '@/components/NavCom.vue'
import DetailCard from '@/components/DetailCard.vue'
import MayLike from '@/components/MayLike.vue'
import StoreShare from '@/components/StoreShare.vue'
import StoreIntro from '@/components/StoreIntro.vue'
import Data from '@/db/data.json'
import LittleCard from '@/components/LittleCard.vue'
export default {
  name: 'ProduceDetail',
  components: {
    NavCom, DetailCard, MayLike, StoreShare, StoreIntro, LittleCard
  },
  data () {
    return {
      goodsDetail: null
    }
  },
  created () {
    this.loadDetail()
  },
  computed: {
    listId () {
      return this.$route.params.id - 1
    }
  },
  watch: {
    '$route.params.id': {
      handler: 'loadDetail',
      immediate: true
    }
  },
  methods: {
    // 段落换行
    formatFeatures (text) {
      return text.replace(/\n/g, '<br>') // 替换 \n 为 <br>
    },
    // 加上id
    loadDetail (id = this.$route.params.id) {
      const index = id - 1
      this.goodsDetail = Data[index]

      if (this.goodsDetail) {
        this.goodsDetail.others = this.goodsDetail.others.map(other => {
          const match = Data.find(product => product.slug === other.slug)
          return {
            ...other,
            id: match ? match.id : null
          }
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '@/styles/detail.less';
</style>
