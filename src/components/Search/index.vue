<!--
 * @Author: ZWH
 * @Email: zhangwh@uway.com
 * @Date: 2021-03-16 13:58:29
 * @Description: 
 * @LastEditTime: 2021-03-17 14:02:19
-->

<template>
  <el-container class="search">
    <el-header>
      <div class="logo"><img :src="require('@/assets/img/micon.png')"></div>

      <div class="searchBtn">
        <i slot="prefix"
           class="el-input__icon el-icon-search"></i>
        <span class="searchInput">搜索商品名称</span>
      </div>
      <div class="avator">
        <i  class="iconfont icon-wode_huaban"></i>

      </div>
    </el-header>
  </el-container>

</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Search extends Vue {}
</script>

<style scoped  lang='less'>
.search {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: #f2f2f2;

  .el-header {
    padding: 0;
    height: 0.46rem !important;
    display: flex;
    align-items: center;
  }

  .logo {
    width: 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0.1rem;
    img {
      width: 80%;
    }
  }

  .searchBtn {
    display: flex;
    align-items: center;
    height: 80%;
    padding-left: 0.1rem;
    border: 1px solid #f2f2f2;
    color: #acabab;
    background: #fff;
    flex: 1;
  }
  .searchInput {
    display: inline-block;
    margin-left: 0.1rem;
  }

  .avator {
    margin: 0 0.1rem;
    display: flex;
    .icon-wode_huaban {
      font-size: 0.24rem;
      color: #828282;
    }
  }
}
</style>