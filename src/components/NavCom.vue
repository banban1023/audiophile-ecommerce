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
      <div class="dian">
        <button class="nav_cart" @click="showCartBox">cart</button>
        <span class="count" v-if="totalCount">{{totalCount}}</span>
      </div>
      <van-popup v-model="showCart">
        <section class="cart_header" v-if="totalCount">
          <h4 class="cart_title">CART({{totalCount}})</h4>
          <button class="clear_all" @click="clearCart">Remove all</button>
        </section>
        <section class="cart_card" v-if="totalCount">
          <ul class="carts">
            <li v-for="item in cartItems" :key="item.id">
              <img class="cart_img" :src="item.image.mobile | fixAssetPath" alt="">
              <div class="name_price">
                <div class="cart_name">{{item.name}}</div>
                <div class="cart_price">$ {{item.price}}</div>
              </div>
              <van-stepper
                min='0'
                :value="getItemCount(item.id)"
                @change="updateItemCount(item.id, $event)"
                integer
              />
            </li>
          </ul>
        </section>
        <section class="cart_total" v-if="totalCount">
          <h5 class="total_title">TOTAL</h5>
          <p class="total_price">$ {{totalPrice}}</p>
        </section>
        <button v-if="totalCount" class="cart_checkout" @click="$router.push('/checkout')">CHECKOUT</button>
        <section class="cart_null" v-else>
          <img src="@/assets/cart/gouwucheweikong.svg" alt="">
          <div class="null_msg">Your cart is empty.</div>
        </section>
      </van-popup>
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
// import { Notify } from 'vant'
import LittleCard from '@/components/LittleCard.vue'
import products from '@/db/data.json'
import { mapGetters, mapMutations } from 'vuex'
export default {
  components: {
    LittleCard
  },
  data () {
    return {
      show: false,
      linkList: [
        { to: '/headphones', name: 'HEADPHONES' },
        { to: '/speakers', name: 'SPEAKERS' },
        { to: '/earphones', name: 'EARPHONES' }
      ],
      showCart: false,
      cart: [],
      addCount: 1,
      products
    }
  },
  computed: {
    ...mapGetters({
      getItemCount: 'cart/getItemCount'
    }),
    cartItems () {
      const cart = this.$store.getters['cart/getCart']
      return Object.values(cart).map(({ item, count }) => ({
        ...item,
        count
      }))
    },
    totalPrice () {
      return this.cartItems.reduce((sum, i) => sum + i.count * i.price, 0)
    },
    totalCount () {
      return this.$store.getters['cart/totalCount']
    }
  },
  methods: {
    ...mapMutations({ clearCart: 'cart/clearCart' }),
    /* 改变商品数量 */
    updateItemCount (id, count) {
      this.$store.commit('cart/updateItemCount', { id, count })
    },
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
    },
    // 打开购物车
    showCartBox () {
      this.showCart = true
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
    console.log(this.cartItems, 0)
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
      cursor: pointer;
    }
    .nav_desktop {
      display: none;
      li {
        cursor: pointer;
        &:hover a{
          color: @origy-bgc;
          transition: all 0.2s;
        }
      }
    }
    .logo {
      background: url('../assets/shared/desktop/logo.svg') no-repeat;
      font-size: 0;
      width: 143px;
      height: 25px;
    }
    .dian {
      position: relative;
      .nav_cart {
      background: url('../assets/shared/desktop/icon-cart.svg') no-repeat;
      width: 23px;
      height: 20px;
      font-size: 0;
      border: none;
      cursor: pointer;
    }
    .count {
      position: absolute;
      top: -2px;
      right: -10px;
      display: inline-block;
      background-color: red;
      color: #fff;
      height: 16px;
      padding: 0 6px;
      font-size: 12px;
      line-height: 16px;
      border-radius: 8px;
    }
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
  .van-popup--center {
    position: fixed;
    top: 114px;
    right: 24px;
    left: auto;
    width: 327px;
    transform: none;
    border-radius: 8px;
    padding: 32px 28px 31px;
    .cart_header {
      display: flex;
      justify-content: space-between;
      .cart_title {
        font-size: 18px;
        text-transform: uppercase;
        letter-spacing: 1.29px;
      }
      .clear_all {
        border: none;
        background-color: transparent;
        cursor: pointer;
        align-items: center;
        font-size: 15px;
        font-weight: 600;
        line-height: 25px;
        text-decoration: underline;
        color: rgba(0, 0, 0, 0.5);
        &:hover {
          color: @origy-bgc;
          transition: all 0.2s;
        }
      }
    }
    .cart_card {
      margin-top: 31px;
       .carts {
        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 13px;
          .cart_img {
            width: 64px;
            height: 64px;
          }
          .name_price {
            width: 100px;
            .cart_name {
              font-size: 15px;
              line-height: 25px;
              font-weight: bold;
            }
            .cart_price {
              font-size: 14px;
              font-weight: bold;
              line-height: 25px;
              color: rgba(0, 0, 0, 0.5);
            }
          }
          .van-stepper {
            .van-stepper__input {
              margin: 0;
            }
          }
        }
      }
    }
    .cart_total {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 32px;
      .total_title {
        font-size: 15px;
        line-height: 25px;
        letter-spacing: normal;
        color: rgba(0, 0, 0, 0.5);
      }
      .total_price {
        font-size: 18px;
        font-weight: bold;
        line-height: normal;
        text-align: center;
        text-transform: uppercase;
      }
    }
    .cart_null {
      display: flex;
      height: 312px;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .null_msg {
        margin-top: 40px;
        font-size: 25px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1.2px;
        color: #D87D4A;
      }
    }
    .cart_checkout {
      width: 100%;
      height: 48px;
      margin-top: 24px;
      background-color: @origy-bgc;
      border: none;
      font-size: 13px;
      font-weight: bold;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #FFFFFF;
      cursor: pointer;
      &:hover {
        background: #FBAF85;
        transition: all 0.2s;
      }
    }
  }
}

@media (min-width: 768px) {
  .nav {
    .nav_header {
      .logo {
        position: absolute;
        top: 32px;
        left: 97px;
      }
    }
    .pupop_nav.active {
      height: 340px;
    }
    .van-popup--center {
      width: 377px;
      right: 40px;
      .cart_card {
        .carts {
          li {
            .name_price {
              flex: 1;
              margin-left: 15px;
            }
          }
        }
      }
    }
  }
}

@media (min-width: 1440px) {
  .nav {
    height: 96px;
    margin: 0 165px;
    width: calc(100% - 330px);
    padding: 0;
    .nav_header {
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
    .van-popup--center {
      right: 165px;
    }
  }
}
</style>
