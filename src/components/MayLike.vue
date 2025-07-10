<template>
  <div class="maylike">
    <picture>
      <source
        media="(min-width: 1440px)"
        :srcset="item.image.desktop | fixAssetPath"
      >
      <source
        media="(min-width: 768px)"
        :srcset="item.image.tablet | fixAssetPath"
      >
      <img
        :src="item.image.mobile | fixAssetPath"
        class="like_img"
      >
    </picture>
    <h4 class="like_title">{{item.name}}</h4>
    <button class="like_btn" @click="$router.push(`/detail/${item.id}`)">SEE PRODUCT</button>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  created () {
    console.log(this.item)
  }
}
</script>

<style lang="less" scoped>
.maylike {
  display: flex;
  flex-direction: column;
  align-items: center;
  .like_img {
    width: 100%;
    border-radius: 8px;
    vertical-align: top;
  }
  .like_title {
    margin-top: 32px;
    font-size: 24px;
    font-weight: bold;
    line-height: normal;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1.71px;
    color: #000000;
  }
  .like_btn {
    margin-top: 32px;
    width: 160px;
    height: 48px;
    background-color: @origy-bgc;
    border: none;
    font-size: 13px;
    line-height: normal;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #FFFFFF;
  }
}

@media (min-width: 768px) {
  .maylike {
    .like_title {
      margin-top: 40px;
    }
  }
}
</style>
