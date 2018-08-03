<template>
  <div style="padding:10px 10px;">
    <!--<img src="../assets/chuanglian-bg.png" style="position: absolute;right:0;top:20px;height:190px;width: 240px">-->
    <div>
      <div class="control-opr-title">窗帘</div>
      <div style="width: 70%;">
        <!--窗帘-->
        <div class="main-chuanglian"
             @touchmove.prevent="mouseMoving"
             @touchend.stop="stopDrag">
          <div class="chuanlian-bar">
          <span class="chuanglian-num" :style="tempElementStyle(el)" v-for="el in temperatureGrades" :key="el">
            <label class="chuanglian-text">{{el}}</label>
          </span>
            <div class="chuanglian-sel-block" :style="sliderStyle">
              <div class="chuanglian-sel-bar"  @touchstart.stop="startDrag">

              </div>
            </div>
          </div>

          <div style="position: relative;top:10px;width: 220px">
            <div class="leftcurtain">
              <img src="./../assets/frontcurtain.jpg" style="height: 100%;position: absolute;left: 0" :style="{width:imgWidth+'%'}"/>
            </div>
            <div class="rightcurtain">
              <img src="./../assets/frontcurtain.jpg" style="height:100%;position: absolute;right: 0" :style="{width:imgWidth+'%'}"/>
            </div>
          </div>
        </div>
        <!--end-->
        <div style="position: absolute;bottom:4rem;">
          <div class="control-opr-img text-center pull-left margin-right15 margin-top25">
            <div><img src="../assets/open.png" class="img-class"></div>
            <div class="font-10 color-8a8a8a">全开</div>
          </div>
          <div class="control-opr-img text-center pull-left margin-right15 margin-top25">
            <div><img src="../assets/stop.png" class="img-class"></div>
            <div class="font-10 color-8a8a8a">暂停</div>
          </div>
          <div class="control-opr-img text-center pull-left margin-right15 margin-top25">
            <div><img src="../assets/close.png" class="img-class"></div>
            <div class="font-10 color-8a8a8a">全关</div>
          </div>
          <div style="clear: both"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Group,GroupTitle,Cell,Panel,Flexbox, FlexboxItem } from 'vux'
  const sliderMinX = 0;
  const sliderMaxX = 185;
  export default {
    components: { Group,GroupTitle,Cell,Panel,Flexbox, FlexboxItem},
    name: 'index',
    data () {
      return {
        temperatureGrades: [100, 75, 50, 25, 0],
        dragging: false,
        initialMouseX: 0,
        sliderX: 0,
        initialSliderX: 0,
        itemWidth:220/5,
        imgWidth:100
      }
    },
    filters: {
      round (num) {
        return Math.round(num)
      }
    },
    computed: {
      sliderStyle () {
        return `transform: translate3d(${ this.sliderX}px, 0, 0);`
      },
      bgStyle () {
        return `background: linear-gradient(to bottom right, ${this.gradientStart}, ${this.gradientEnd});`
      },
      currentTemperature () {
        var _self = this;
        const tempRangeStart = 100;
        const tempRange = 100;
        if(tempRangeStart-parseInt((this.sliderX / sliderMaxX * tempRange)) == 0){
          this.imgWidth = 1;
        }else{
          this.imgWidth = tempRangeStart-parseInt((this.sliderX / sliderMaxX * tempRange));
        }
        return tempRangeStart-parseInt((this.sliderX / sliderMaxX * tempRange));
      }
    },
    created(){
      this.init();
    },
    methods: {
      init(){
        var tmp = 60;
        this.sliderX = (100-tmp) * 185 / 100;
      },
      startDrag (e) {
        this.dragging = true
        this.initialMouseX = e.touches[0].pageX
        this.initialSliderX = this.sliderX
      },
      stopDrag () {
        this.dragging = false
      },
      mouseMoving (e) {
        if(this.dragging) {
          const dragAmount = e.touches[0].pageX - this.initialMouseX
          const targetX = this.initialSliderX + dragAmount
          this.sliderX = Math.max(Math.min(targetX, sliderMaxX), sliderMinX)
          // let targetGradient = coldGradient
          // if (this.currentTemperature >= 25)         {
          //   targetGradient = hotGradient
          // }

          // if (this.gradientStart !== targetGradient.start) {
          //   TweenLite.to(this, 0.7, {
          //     'gradientStart': targetGradient.start,
          //     'gradientEnd': targetGradient.end
          //   })
          // }
        }
        e.stopPropagation();
      },
      tempElementStyle (tempNumber) {
        const nearDistance = 3
        const liftDistance = 12

        const diff = Math.abs(this.currentTemperature - tempNumber)
        const distY = (diff / nearDistance) - 1
        const elementY = Math.min(distY * liftDistance, 0)
        //return  `transform: translate3d(${elementY}px, 0, 0)`
        return  `transform: translate3d(0, 0, 0)`
      }
    }
  }
</script>
