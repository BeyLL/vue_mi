<!--
 * @Author: ZWH
 * @Email: zhangwh@uway.com
 * @Date: 2021-03-16 14:37:13
 * @Description: 首页
 * @LastEditTime: 2021-03-19 16:14:32
-->
<template>
  <div>
    <div class='swiper-plugin'>
      <swiper :lists="bannerLists"></swiper>
    </div>
    <!-- 按鈕选择 -->
    <div class="shopNav">
      <ul>
        <li v-for="(item,index) in iconLists"
            class='iconImg'
            :key="index">
          <img :src='require(`@/assets/img/${item}.png`)'
               alt="">
        </li>
      </ul>
      <!-- 商品画报 -->
      <div class="shopPictorial">
        <div class="pictorail_left item_pic">
          <img :src="require('@/assets/img/pro.png')"
               alt="">
        </div>
        <div class="item_pic pictorial_right">
          <div><img :src="require('@/assets/img/match.png')"
                 alt=""></div>
          <div><img :src="require('@/assets/img/system.png')"
                 alt=""></div>
        </div>

      </div>

      <!-- 活动 -->
      <div class="showAction">
        <a href="https://s1.mi.com/m/app/hd/index.html?id=14413">
          <img :src="require('@/assets/img/tanxian.png')"
               alt="">
        </a>
      </div>
    </div>
  </div>

</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import Swiper from '@/components/Swiper/index.vue'

@Component({
  components: {
    swiper: Swiper,
  },
})
export default class Home extends Vue {
  mounted() {
    this.getImages()
    this.getIcons()
  }

  get iconLists() {
    return this.$store.state.home.icons
  }

  get bannerLists() {
    return this.$store.state.home.banners
  }

  getImages(): void {
    //请求接口获取最新图片
    this.$store.dispatch('home/get_banners')
  }

  getIcons(): void {
    this.$store.dispatch('home/get_icon')
  }
}
</script>

<style lang='less'>
.shopNav {
  width: 100%;
  ul {
    display: flex;
    flex-wrap: wrap;
    background: #fff;
  }

  .iconImg {
    flex: 0 0 20%;
    height: 0.7rem;
    text-align: center;
    img {
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
    }
  }
}

.shopPictorial {
  display: flex;
  flex-direction: row;
  margin-top: 0.1rem;

  .item_pic {
    width: 50%;
    text-align: center;
  }

  .pictorail_left {
    margin-right: 0.02rem;

    img {
      // width: auto;
      // height: auto;
      display: block;
      max-width: 100%;
      max-height: 2.64rem;
    }
  }

  .pictorial_right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img {
      // width: auto;
      // height: auto;
      max-width: 100%;
      max-height: 1.32rem;
      display: block;
    }
  }
}

.showAction {
  margin: 0.1rem 0;

  a {
    display: block;
    img {
      display: block;
      max-width: 100%;
      max-height: 1.45rem;
    }
  }
}
</style>