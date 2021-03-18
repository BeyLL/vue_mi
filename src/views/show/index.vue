<!--
 * @Author: ZWH
 * @Email: zhangwh@uway.com
 * @Date: 2021-03-10 14:04:55
 * @Description: 小米商城首页
 * @LastEditTime: 2021-03-17 14:12:48
-->

<template>
  <div class="shop-list ">
    <app-search></app-search>
    <div class="shop-main">
      <router-view></router-view>
    </div>

    <app-footer></app-footer>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'
import Search from '@/components/Search/index.vue'
import Footer from '@/components/Footer/index.vue'
@Component({
  components: {
    'app-search': Search,
    'app-footer': Footer,
  },
})
export default class Profile extends Vue {}
</script>

<style lang='less'>
@keyframes pulse {
  0% {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.5, 1.5, 1.5);
  }

  100% {
    transform: scale3d(1, 1, 1);
  }
}

.shop-list {
  height: 100%;
  background: rgba(225, 225, 225, 0.4);

  .shop-main {
    position: absolute;
    top: 0.46rem;
    bottom: 0.52rem;
    width: 100%;
    overflow: auto;
    z-index: 10;
  }
}
</style>