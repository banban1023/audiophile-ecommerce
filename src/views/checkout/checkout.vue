<template>
  <div class="checkout">
    <header>
      <NavCom></NavCom>
    </header>
    <main>
      <section class="checkout_form">
        <button class="go_back" @click="$router.go(-1)">Go Back</button>
        <form @submit.prevent="handleSubmit" action="/checkout" ref="checkoutForm">
          <!-- 账单详情 -->
          <h2 class="form_title">CHECKOUT</h2>
          <h3 class="form_subtitle">Billing Details</h3>
          <label for="name" :class="{ error: error.name }">
            <p class="inp_title">Full Name</p>
            <span>Name is required</span>
            <input type="text" id="name" name="name" placeholder="Alexei Ward" v-model="formData.name">
          </label>
          <label for="email" :class="{ error: error.email }">
            <p class="inp_title">Email Address</p>
            <span v-if="error.email === 'required'">Email is required</span>
            <span v-else-if="error.email === 'invalid'">Email format is invalid</span>
            <input type="email" id="email" name="email" placeholder="alexei@mail.com" v-model="formData.email">
          </label>
          <label for="number" :class="{ error: error.number || error.numberFormat }">
            <p class="inp_title">Phone Number</p>
            <span v-if="error.number">Phone number is required</span>
            <span v-if="error.numberFormat">Phone number format is invalid</span>
            <input type="tel" id="number" name="number" placeholder="+1 202-555-0136" v-model="formData.number">
          </label>
          <h3 class="form_subtitle">Shipping Info</h3>
          <label for="address" :class="{ error: error.address }">
            <p class="inp_title">Street Address</p>
            <span>Address is required</span>
            <input type="text" id="address" name="address" placeholder="1137 Williams Avenue" v-model="formData.address">
          </label>
          <label for="code" :class="{ error: error.code || error.codeFormat }">
            <p class="inp_title">ZIP Code</p>
            <span v-if="error.code">ZIP code is required</span>
            <span v-if="error.codeFormat">ZIP code format is invalid</span>
            <input type="text" id="code" name="code" placeholder="10001" v-model="formData.code">
          </label>
          <label for="city" :class="{ error: error.city }">
            <p class="inp_title">City</p>
            <span>City is required</span>
            <input type="text" id="city" name="city" placeholder="New York" v-model="formData.city">
          </label>
          <label for="country" :class="{ error: error.country }">
            <p class="inp_title">Country</p>
            <span>Country is required</span>
            <input type="text" id="country" name="country" placeholder="United States" v-model="formData.country">
          </label>
          <h3 class="form_subtitle">Payment Details</h3>
          <div class="radio-group">
            <p class="inp_title">Payment Method</p>
            <section>
              <label for="e-money">
                <input type="radio" id="e-money" name="method" value="e-money" v-model="paymentMethod">
                e-Money
              </label>
              <label for="cash">
                <input type="radio" id="cash" name="method" value="cash" v-model="paymentMethod">
                Cash on Delivery
              </label>
            </section>
          </div>
          <label for="e-number" v-if="paymentMethod === 'e-money'" :class="{ error: error.eNumber || error.eNumberFormat }">
            <p class="inp_title">e-Money-Number</p>
            <span v-if="error.eNumber">e-Money number is required</span>
            <span v-if="error.eNumberFormat">e-Money number must be 9 digits</span>
            <input type="number" id="e-number" name="e-number" placeholder="238521993" v-model="formData.eNumber">
          </label>
          <label for="e-pin" v-if="paymentMethod === 'e-money'" :class="{ error: error.ePin || error.ePinFormat }">
            <p class="inp_title">e-Money PIN</p>
            <span v-if="error.ePin">e-Money PIN is required</span>
            <span v-if="error.ePinFormat">e-Money PIN must be 4 digits</span>
            <input type="number" id="e-pin" name="e-pin" placeholder="6891" v-model="formData.ePin">
          </label>
          <section class="delivery" v-if="paymentMethod === 'cash'">
            <img src="@/assets/checkout/icon-cash-on-delivery.svg" alt="" class="delivery_img">
            <p class="delivery_msg">
              The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
            </p>
          </section>
        </form>
      </section>
      <section class="summary">
        <h2 class="summary_title">
          SUMMARY
        </h2>
        <ul class="summary_cart">
          <li v-for="item in cart" :key="item.item.id">
            <img :src="item.item.image.mobile | fixAssetPath" alt="" class="summary_img">
            <div class="info">
                <p class="summary_name">{{item.item.name}}</p>
                <span class="summary_price">$ {{item.item.price}}</span>
            </div>
            <p class="summary_count">x{{item.count}}</p>
          </li>
        </ul>
        <p class="summary_total">TOTAL <span>$ {{totalPrice}}</span></p>
        <p class="summary_total">SHIPPING <span>$ 50</span></p>
        <p class="summary_total">VAT (INCLUDED) <span>$ {{val}}</span></p>
        <p class="summary_total">GRAND TOTAL <span>$ {{grandTotal}}</span></p>
        <button class="continue_pay" @click="handleSubmit">
          CONTINUE & PAY
        </button>
        <van-popup v-model="showOrder" :close-on-click-overlay="false">
          <img src="@/assets/checkout/icon-order-confirmation.svg" alt="" class="popip_icon">
          <h2 class="continue_title">THANK YOU FOR YOUR ORDER</h2>
          <p class="continue_msg">
            You will receive an email confirmation shortly.
          </p>
          <section class="continue_intro">
            <div class="continue_cart">
              <div class="concart" v-for="item in limitedCartItems" :key="item.item.id">
                <img :src="item.item.image.mobile | fixAssetPath" alt="" class="concart_img">
                <div class="concart_intro">
                  <p class="concart_title">
                    {{item.item.name}}
                  </p>
                  <p class="concart_price">$ {{item.item.price}}</p>
                </div>
              <p class="concart_count">x{{item.count}}</p>
              </div>
              <p class="continue_more" @click="toggleShowAll" v-if="otherItemsCount">
                {{ showAll ? 'View less' : `and ${otherItemsCount} other item(s)` }}
              </p>
            </div>
            <p class="continue_total">GRAND TOTAL <span>$ {{grandTotal}}</span></p>
          </section>
          <button class="continue_btn" @click="backHome">BACK TO HOME</button>
        </van-popup>
      </section>
    </main>
    <footer>
      <StoreShare></StoreShare>
    </footer>
  </div>
</template>

<script>
import NavCom from '@/components/NavCom.vue'
import StoreShare from '@/components/StoreShare.vue'
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'CheckoutView',
  components: {
    NavCom, StoreShare
  },
  data () {
    return {
      showOrder: false,
      showAll: false,
      paymentMethod: 'e-money',
      formData: {
        name: '',
        email: '',
        number: '',
        address: '',
        code: '',
        city: '',
        country: '',
        eNumber: '',
        ePin: ''
      },
      error: {
        name: false,
        email: false,
        emailFormat: false,
        number: false,
        numberFormat: false,
        address: false,
        code: false,
        codeFormat: false,
        city: false,
        country: false,
        eNumber: false,
        eNumberFormat: false,
        ePin: false,
        ePinFormat: false
      }
    }
  },
  methods: {
    handleSubmit () {
      const isValid = this.validateForm()
      if (isValid) {
        this.showOrder = true
      } else {
        // 如果验证失败，滚动到页面顶部
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    },
    validateForm () {
      let isValid = true
      // 重置所有错误状态
      this.error = {
        name: false,
        email: false,
        emailFormat: false,
        number: false,
        numberFormat: false,
        address: false,
        code: false,
        codeFormat: false,
        city: false,
        country: false,
        eNumber: false,
        eNumberFormat: false,
        ePin: false,
        ePinFormat: false
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!this.formData.name.trim()) {
        this.error.name = true
        isValid = false
      }
      if (!this.formData.email.trim()) {
        this.error.email = 'required'
        isValid = false
      } else if (!emailRegex.test(this.formData.email)) {
        this.error.email = 'invalid'
        isValid = false
      }
      if (!this.formData.number.trim()) {
        this.error.number = true
        isValid = false
      } else if (!/^\+?\d{7,15}$/.test(this.formData.number)) {
        this.error.numberFormat = true
        isValid = false
      }
      if (!this.formData.address.trim()) {
        this.error.address = true
        isValid = false
      }
      if (!this.formData.code.trim()) {
        this.error.code = true
        isValid = false
      } else if (!/^\d{4,10}$/.test(this.formData.code)) {
        this.error.codeFormat = true
        isValid = false
      }
      if (!this.formData.city.trim()) {
        this.error.city = true
        isValid = false
      }
      if (!this.formData.country.trim()) {
        this.error.country = true
        isValid = false
      }
      if (this.paymentMethod === 'e-money') {
        const eNumStr = this.formData.eNumber.toString().trim()
        if (!eNumStr) {
          this.error.eNumber = true
          isValid = false
        } else if (!/^\d{9}$/.test(eNumStr)) {
          this.error.eNumberFormat = true
          isValid = false
        }

        const ePinStr = this.formData.ePin.toString().trim()
        if (!ePinStr) {
          this.error.ePin = true
          isValid = false
        } else if (!/^\d{4}$/.test(ePinStr)) {
          this.error.ePinFormat = true
          isValid = false
        }
      }
      return isValid
    },
    // 切换是否全部显示
    toggleShowAll () {
      this.showAll = !this.showAll
    },
    backHome () {
      this.$router.push('/home')
      this.$store.commit('cart/clearCart')
    }
  },
  computed: {
    ...mapState('cart', ['cart']),
    ...mapGetters('cart', ['totalCount']),
    totalPrice () {
      if (!this.cart) return 0
      return Object.values(this.cart).reduce(
        (sum, { item, count }) => sum + (item.price * count),
        0
      )
    },
    val () {
      return this.totalPrice * 0.2
    },
    grandTotal () {
      return this.totalPrice + 50
    },
    cartItems () {
      return this.cart ? Object.values(this.cart) : []
    },
    // 根据showAll状态返回要显示的商品
    limitedCartItems () {
      return this.showAll ? this.cartItems : this.cartItems.slice(0, 1)
    },
    // 计算其他商品数量
    otherItemsCount () {
      return Math.max(this.cartItems.length - 1, 0)
    }
  }
  // created () {
  //   console.log(this.cart)
  //   console.log(this.limitedCartItems, 5)
  // }
}
</script>

<style lang="less" scoped>
@import '@/styles/checkout.less';
</style>
