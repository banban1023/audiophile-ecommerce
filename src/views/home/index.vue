<template>
  <div class="index_nav">
    <div class="nav">
      <button class="mobile_nav" @click.stop="showPopup" ref="trigger">nav button</button>
      <router-link to="/home"><h1 class="logo">audiophile</h1></router-link>
      <button class="nav_cart">cart</button>
    </div>
    <div v-if="show" class="popup_backdrop" @click="closePopup"></div>
    <section
      :class="['pupop_nav', { active: show }]"
      ref="popup"
    >
      <!-- <router-link to="home">HOME</router-link> -->
      <LittleCard></LittleCard>
    </section>
    <router-view></router-view>
  </div>
</template>

<script>
import LittleCard from '@/components/LittleCard.vue'
export default {
  name: 'IndexView',
  components: {
    LittleCard
  },
  data () {
    return {
      show: false,
      linkList: [
        { to: 'headphones', name: 'HEADPHONES' },
        { to: 'speakers', name: 'SPEAKERS' },
        { to: 'earphones', name: 'EARPHONES' }
      ]
    }
  },
  methods: {
    // 打开导航
    showPopup () {
      this.show = true
    },
    closePopup () {
      this.show = false
    },
    // 关闭导航
    handleDocumentClick (e) {
      const popup = this.$refs.popup
      const trigger = this.$refs.trigger
      // 点击的不是 popup，也不是触发按钮
      if (
        !popup?.contains(e.target) &&
        !trigger?.contains(e.target)
      ) {
        this.show = false
      }
    }
  },
  watch: {
    // 跳转关闭router-link
    $route () {
      this.show = false
    }
  },
  mounted () {
    // 关闭导航
    document.addEventListener('click', this.handleDocumentClick)
  },
  beforeDestroy () {
    // 关闭导航
    document.removeEventListener('click', this.handleDocumentClick)
  }
}

</script>

<style lang="less" scoped>
@import '@/styles/index.less';
</style>
