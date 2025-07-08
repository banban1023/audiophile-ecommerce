<template>
  <div class="index_nav">
    <NavCom></NavCom>
    <router-view></router-view>
  </div>
</template>

<script>
import NavCom from '@/components/NavCom.vue'
export default {
  name: 'IndexView',
  components: {
    NavCom
  }
}

</script>

<style lang="less" scoped>
</style>
