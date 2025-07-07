<template>
  <div class="share">
    <div class="rectangle"></div>
    <router-link to="/home"><h3 class="share_logo">audiophile</h3></router-link>
    <ul class="share_nav">
      <li v-for="item in navList" :key="item.name">
        <router-link :to="item.link">{{item.name}}</router-link>
      </li>
    </ul>
    <p class="share_intro">
      Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
    </p>
    <div class="share--flex">
      <p class="share_msg">Copyright 2021. All Rights Reserved</p>
      <ul class="share_button">
        <li v-for="item in shareList" :key="item.img">
          <a href="#"><img :src="item.img" alt=""></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navList: [
        { name: 'HOME', link: '/home' },
        { name: 'HEADPHONES', link: '/headphones' },
        { name: 'SPEAKERS', link: '/speakers' },
        { name: 'EARPHONES', link: '/earphones' }
      ],
      shareList: [
        { img: require('@/assets/shared/desktop/icon-facebook.svg') },
        { img: require('@/assets/shared/desktop/icon-twitter.svg') },
        { img: require('@/assets/shared/desktop/icon-instagram.svg') }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.share {
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #101010;
  .rectangle {
    width: 101px;
    height: 4px;
    background-color: @origy-bgc;
  }
  .share_logo {
    background: url('@/assets/shared/desktop/logo.svg') no-repeat;
    display: inline-block;
    width: 143px;
    height: 25px;
    margin-top: 48px;
    font-size: 0;
  }
  .share_nav {
    margin-top: 48px;
    li {
      text-align: center;
      margin-bottom: 16px;
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
  .share_intro {
    font-size: 15px;
    margin-top: 32px;
    line-height: 25px;
    text-align: center;
    padding: 0 5px;
    color: rgba(255, 255, 255, 0.5);
  }
  .share_msg {
    margin-top: 48px;
    color: rgba(255, 255, 255, 0.5);
    font-size: 15px;
    line-height: 25px;
  }
  .share_button {
    margin: 48px 0 38px;
    display: flex;
    width: 104px;
    justify-content: space-between;
  }
}
@media (min-width: 768px) {
  .share {
    align-items: flex-start;
    padding: 0 40px;
    .share_logo {
      margin-top: 56px;
    }
    .share_nav {
      display: flex;
      width: 429px;
      justify-content: space-between;
      margin-top: 32px;
    }
    .share_intro {
      padding: 0;
      text-align: left;
    }
    .share--flex {
      width: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      .share_msg {
        margin-top: 80px;
        display: inline-block;
      }
      .share_button {
        margin: 0;
      }
    }
  }
}
</style>
