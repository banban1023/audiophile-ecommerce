<template>
  <div class="nav">
    <div class="nav_header">
      <button class="mobile_nav" @click.stop="showPopup" ref="trigger">nav button</button>
      <router-link to="/home"><h1 class="logo">audiophile</h1></router-link>
      <ul class="nav_desktop">
        <li><router-link to="/home">HOME</router-link></li>
        <li v-for="item in linkList" :key="item.name">
          <router-link :to="item.to">{{item.name}}</router-link>
        </li>
      </ul>
      <button class="nav_cart">cart</button>
    </div>
    <div v-if="show" class="popup_backdrop" @click="closePopup"></div>
    <section
      :class="['pupop_nav', { active: show }]"
      ref="popup"
    >
      <!-- <router-link to="/home">HOME</router-link> -->
      <LittleCard></LittleCard>
    </section>
  </div>
</template>

<script>
import LittleCard from '@/components/LittleCard.vue'
export default {
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
.nav {
  .nav_header {
    display: flex;
    height: 90px;
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    position: relative;
    z-index: 10;
    .mobile_nav {
      width: 16px;
      height: 15px;
      font-size: 0;
      background: url('../assets/shared/mobile/image-hamberger.svg') no-repeat;
      border: none;
      background-color: transparent;
    }
    .nav_desktop {
      display: none;
    }
    .logo {
      background: url('../assets/shared/desktop/logo.svg') no-repeat;
      font-size: 0;
      width: 143px;
      height: 25px;
    }
    .nav_cart {
      background: url('../assets/shared/desktop/icon-cart.svg') no-repeat;
      width: 23px;
      height: 20px;
      font-size: 0;
      border: none;
    }
  }
  .popup_backdrop {
    position: fixed;
    top: 89px; // 确保不遮住导航栏
    left: 0;
    width: 100%;
    height: calc(100% - 89px);
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
  }
  .pupop_nav {
    position: absolute;
    top: 89px;
    left: 0;
    width: 100%;
    height: 0;
    background-color: #fff;
    opacity: 0;
    font-size: 0;
    transition: all 0.5s ease;
    z-index: 3;
    pointer-events: none; // 不接受鼠标事件
  }
  .pupop_nav.active {
    font-size: 18px;
    height: 750px;
    opacity: 1;
    pointer-events: auto; // 激活后才接受鼠标事件
  }
}

@media (min-width: 768px) {
  .index_nav {
    .nav {
      .logo {
        position: absolute;
        top: 32px;
        left: 97px;
      }
    }
    .pupop_nav.active {
      height: 340px;
    }
  }
}

@media (min-width: 1440px) {
  .index_nav {
    .nav {
      height: 96px;
      margin: 0 165px;
      width: calc(100% - 330px);
      padding: 0;
      .mobile_nav {
        display: none;
      }
      .logo {
        position: static;
      }
      .nav_desktop {
        display: flex;
        position: absolute;
        top: 35px;
        left: 340px;
        width: 429px;
        justify-content: space-between;
        li {
          a {
            font-size: 13px;
            font-weight: bold;
            line-height: 25px;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #FFFFFF;
          }
        }
      }
    }
  }
}
</style>
