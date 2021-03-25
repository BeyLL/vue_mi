<!--
 * @Author: ZWH
 * @Email: zhangwh@uway.com
 * @Date: 2021-03-17 14:14:52
 * @Description: 滑动组件
 * @LastEditTime: 2021-03-23 15:35:01
-->

<template>
  <div class="container"
       ref="box">
    <div class='carousel-inner'
         ref='imgBoxEle'
         @touchstart='touchStart'
         @touchmove="touchMove"
         @touchend='touchEnd'
         :style="{left: left+ 'px'}">
      <img class="carousel-item"
           v-for="(item,index) in lists"
           :key="index"
           :src="require(`@/assets/img/${item}.png`)"
           alt="">
    </div>
    <div class="carousel-dot">
      <div :class="['dot-item',{'activeDot':activeNumber===index}]"
           v-for="(item,index) in lists"
           :key='index'></div>
    </div>
  </div>

</template>
<script lang='ts'>
import { Vue, Component, Prop, Ref, Watch } from 'vue-property-decorator'
@Component
export default class Swiper extends Vue {
  left: number = 0
  timer: number = 0
  imgWid: number = 0
  deepLists: any[] = []
  activeNumber: number = 0
  ready: boolean = true
  @Prop({ default: 3000, type: Number }) time!: number
  @Prop({ default: 50, type: Number }) distance!: number
  @Prop({ default: 1, type: Number }) speed!: number
  @Prop({ default: true, type: Boolean }) loop!: boolean
  @Prop(Array) lists!: any[]
  @Ref('imgBoxEle') imgRef!: HTMLHtmlElement
  @Ref('box') boxRef!: HTMLHtmlElement

  //watch监听props传递值lists的变化
  @Watch('lists')
  scaleLists(newValue: any[], oldValue: any[]) {
    this.deepLists = newValue
    newValue && this.getEle()
  }

  destroyed() {
    this.stopSwiper()
  }

  getEle() {
    let length = this.deepLists && this.deepLists.length
    if (!length) return
    this.timer = setInterval(() => {
      this.imgRef.style.transition = `all ${this.speed}s ease`
      this.left -= this.boxRef.clientWidth
      this.activeNumber++
      if (this.activeNumber === length) {
        this.left = 0
        this.activeNumber = 0
      }
    }, this.time)
  }

  //清除滑动
  stopSwiper() {
    clearInterval(this.timer)
    this.timer = 0
  }

  //点击
  touchStart() {
    console.log('点击')
    this.stopSwiper()
  }

  //手触屏移动
  touchMove() {
    console.log('移动')
  }

  //停止
  touchEnd() {
    console.log('移动停止')
  }
}
</script>

<style  lang='less'>
.container {
  position: relative;
  height: 1.88rem;
  overflow: hidden;
  background: #ccc;
  width: 100%;
}
.carousel-inner {
  position: relative;
  top: 0;
  display: flex;
  flex-direction: row;
  height: 100%;
  .carousel-item {
    display: inline-block;
    height: 100%;
    width: 100%;
  }
}

.carousel-dot {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0.1rem;
  display: flex;
  justify-content: center;
  .dot-item {
    width: 0.1rem;
    height: 0.1rem;
    margin-right: 0.1rem;
    border-radius: 50%;
    background: #fff;
  }

  .activeDot {
    background: rgb(210, 87, 30);
  }
}
</style>