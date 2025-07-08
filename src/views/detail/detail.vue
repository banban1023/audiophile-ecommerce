<template>
  <div class="detail">
    <header>
      <NavCom></NavCom>
    </header>
  </div>
</template>

<script>
import NavCom from '@/components/NavCom.vue'
export default {
  name: 'ProduceDetail',
  components: {
    NavCom
  }
}
</script>

<style lang="less" scoped>
.detail {
  header {
    height: 90px;
    background: #000;
  }
}

</style>
