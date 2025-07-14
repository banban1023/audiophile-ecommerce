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
          <label for="name">
            <p class="inp_title">Full Name</p>
            <input type="text" id="name" name="name" placeholder="Alexei Ward">
          </label>
          <label for="email">
            <p class="inp_title">Email Address</p>
            <input type="email" id="email" name="email" placeholder="alexei@mail.com">
          </label>
          <label for="number">
            <p class="inp_title">Phone Number</p>
            <input type="tel" id="number" name="number" placeholder="+1 202-555-0136">
          </label>
          <h3 class="form_subtitle">Shipping Info</h3>
          <label for="address">
            <p class="inp_title">Street Address</p>
            <input type="text" id="address" name="address" placeholder="1137 Williams Avenue">
          </label>
          <label for="code">
            <p class="inp_title">ZIP Code</p>
            <input type="text" id="code" name="code" placeholder="10001">
          </label>
          <label for="city">
            <p class="inp_title">City</p>
            <input type="text" id="city" name="city" placeholder="New York">
          </label>
          <label for="country">
            <p class="inp_title">Country</p>
            <input type="text" id="country" name="country" placeholder="United States">
          </label>
          <h3 class="form_subtitle">Payment Details</h3>
          <div class="radio-group">
            <p class="inp_title">Payment Method</p>
            <section>
              <label for="e-money">
                <input type="radio" id="e-money" name="method" value="e-money">
                e-Money
              </label>
              <label for="cash">
                <input type="radio" id="cash" name="method" value="cash">
                Cash on Delivery
              </label>
            </section>
          </div>
          <label for="e-number">
            <p class="inp_title">e-Money-Number</p>
            <input type="number" id="e-number" name="e-number" placeholder="238521993">
          </label>
          <label for="e-pin">
            <p class="inp_title">e-Money PIN</p>
            <input type="number" id="e-pin" name="e-pin" placeholder="6891">
          </label>
        </form>
      </section>
      <section class="summary">
        <h2 class="summary_title">
          SUMMARY
        </h2>
        <ul class="summary_cart">
          <li>
            <img src="@/assets/cart/image-xx99-mark-one-headphones.jpg" alt="" class="summary_img">
            <div class="info">
                <p class="summary_name">XX99 MK II</p>
                <span class="summary_price">$ 2,999</span>
            </div>
            <p class="summary_count">x2</p>
          </li>
        </ul>
        <p class="summary_total">TOTAL <span>$ 5,396</span></p>
        <p class="summary_total">SHIPPING <span>$ 50</span></p>
        <p class="summary_total">VAT (INCLUDED) <span>$ 1,079</span></p>
        <p class="summary_total">GRAND TOTAL <span>$ 5,446</span></p>
        <button class="continue_pay" @click="handleSubmit">
          CONTINUE & PAY
        </button>
        <van-popup v-model="showOrder">
          <img src="@/assets/checkout/icon-order-confirmation.svg" alt="" class="popip_icon">
          <h2 class="continue_title">THANK YOU FOR YOUR ORDER</h2>
          <p class="continue_msg">
            You will receive an email confirmation shortly.
          </p>
          <section class="continue_intro">
            <div class="continue_cart">
              <div class="concart">
                <img src="@/assets/cart/image-xx99-mark-one-headphones.jpg" alt="" class="concart_img">
                <div class="concart_intro">
                  <p class="concart_title">
                    XX99 MK II
                  </p>
                  <p class="concart_price">$ 2,999</p>
                </div>
              <p class="concart_count">x1</p>
              </div>
              <p class="continue_more">
                and 2 other item(s)
              </p>
            </div>
            <p class="continue_total">GRAND TOTAL <span>$ 5,446</span></p>
          </section>
          <button class="continue_btn">BACK TO HOME</button>
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
export default {
  name: 'CheckoutView',
  components: {
    NavCom, StoreShare
  },
  data () {
    return {
      showOrder: false
    }
  },
  methods: {
    handleSubmit () {
      this.showOrder = true
    }
  }
}
</script>

<style lang="less" scoped>
@import '@/styles/checkout.less';
</style>
