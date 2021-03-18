<!--
 * @Author: ZWH
 * @Email: zhangwh@uway.com
 * @Date: 2021-03-16 14:48:37
 * @Description: 底部公共导航
 * @LastEditTime: 2021-03-17 11:04:42
-->
<template>
  <el-container class="home_footer">
    <el-footer>
      <ul>
        <li v-for="(item,index) in navLists"
            :key='index'
            @click="setIndex(index)"
            :class="{activeLi:currentIndex===index}">
          <router-link :to='item.path'>
            <div><span :class="`iconfont ${item.icon}`"></span></div>
            <div>{{item.title}}</div>
          </router-link>
        </li>
      </ul>
    </el-footer>
  </el-container>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
const data = require('@/assets/data.json')
@Component
export default class Footer extends Vue {
  navLists: any[] = []
  currentIndex: number = 0

  mounted() {
    this.navLists = data
  }

  //设置选中按钮
  setIndex(index: number): void {
    this.currentIndex = index
  }
}
</script>
<style lang='less'>
.home_footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #fff;
  .el-footer {
    padding: 0;
    height: 0.52rem !important;
  }

  ul {
    display: flex;
    height: 100%;
    flex-direction: row;
    li {
      display: flex;
      flex: auto;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #999;
      & div {
        font-size: 0.12rem;
      }

      & div:nth-child(2) {
        margin-top: 0.03rem;
      }

      .iconfont {
        font-size: 0.24rem;
        // color: #999;
      }

      .icon-fenlei {
        font-size: 0.27rem;
      }
    }

    .activeLi {
      div {
        color: rgb(216, 97, 12);
      }
    }
  }
}
</style>