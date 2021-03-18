<!--
 * @Author: ZWH
 * @Email: zhangwh@uway.com
 * @Date: 2021-03-16 14:37:13
 * @Description: 首页
 * @LastEditTime: 2021-03-18 15:04:50
-->
<template>
  <div>
    <div class='swiper-plugin'>
      <swiper :lists="bannerLists"></swiper>
    </div>
    <div class="shopNav">
      <ul>
        <li v-for="(item,index) in iconLists"
            class='iconImg'
            :key="index">
          <img :src='require(`@/assets/img/${item}.png`)'
               alt="">
        </li>
      </ul>
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

  get bannerLists(){
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
  }

  .iconImg {
    flex: 0 0 20%;
    // width: 0.6rem;
    height: 0.7rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>