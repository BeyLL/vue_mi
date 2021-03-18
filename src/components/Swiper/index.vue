<!--
 * @Author: ZWH
 * @Email: zhangwh@uway.com
 * @Date: 2021-03-17 14:14:52
 * @Description: 滑动组件
 * @LastEditTime: 2021-03-18 15:35:29
-->

<template>

  <div class="swiper"
       ref="box">
    <div class='imgBox'
         ref='imgBoxEle'
         :style="{width: operatewidth + 'px'}">
      <img class="imgOuter"
           v-for="(item,index) in lists"
           :key="index"
           :style="{width:imgWid+'px'}"
           :src="require(`@/assets/img/${item}.png`)"
           alt="">
    </div>
  </div>

</template>
<script lang='ts'>
import { Vue, Component, Prop, Ref, Watch } from 'vue-property-decorator'
@Component
export default class Swiper extends Vue {
  left: number = 0
  timer: number = 0
  operatewidth: number = 0
  imgWid: number = 0
  deepLists: any[] = []
  @Prop({ default: 2000, type: Number }) time!: number
  @Prop({ default: 50, type: Number }) distance!: number
  @Prop(Array) lists!: any[]
  @Ref('imgBoxEle') imgRef!: HTMLHtmlElement
  @Ref('box') boxRef!: HTMLHtmlElement

  @Watch('lists')
  scaleLists(newValue: any[], oldValue: any[]) {
    this.deepLists = newValue
    console.log(newValue)
    newValue && this.getEle()
  }

  destroyed() {
    this.stopSwiper()
  }

  getEle() {
    let length = this.deepLists && this.deepLists.length
    if (this.deepLists && length) {
      this.imgWid = this.boxRef.clientWidth
      this.operatewidth = this.boxRef.clientWidth * this.deepLists.length
    }
    this.timer = setInterval(() => {
      this.boxRef.scrollLeft += this.boxRef.clientWidth
      if (this.boxRef.scrollLeft === (length - 1) * this.boxRef.clientWidth) {
        this.boxRef.scrollLeft = 0
      }
    }, this.time)
  }

  stopSwiper() {
    clearInterval(this.timer)
    this.timer = 0
  }

  mouseOver() {
    console.log('移入')
    clearInterval(this.timer)
    this.timer = 0
  }
}
</script>

<style  lang='less'>
.swiper {
  height: 1.88rem;
  overflow: hidden;
  background: #ccc;
}
.imgBox {
  display: flex;
  flex-direction: row;
  height: 100%;
  .imgOuter {
    display: inline-block;
    height: 100%;
    // width: 100%;
  }
}
</style>