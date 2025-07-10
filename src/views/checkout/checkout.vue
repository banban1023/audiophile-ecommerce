<template>
  <div class="checkout">
    <header>
      <NavCom></NavCom>
    </header>
    <main>
      <button class="go_back">Go Back</button>
      <section class="checkout_form">
        <form action="">
          <!-- 账单详情 -->
          <h2 class="form_title">CHECKOUT</h2>
          <h3 class="form_subtitle">Billing details</h3>
          <label for="name">
            name
            <input type="text" id="name" name="name">
          </label>
          <h3 class="form_subtitle">shipping info</h3>
          <h3 class="form_subtitle">payment details</h3>
        </form>
      </section>
    </main>
  </div>
</template>

<script>
import NavCom from '@/components/NavCom.vue'
export default {
  name: 'CheckoutView',
  components: {
    NavCom
  }
}
</script>

<style lang="less" scoped>
@import '@/styles/checkout.less';
</style>
