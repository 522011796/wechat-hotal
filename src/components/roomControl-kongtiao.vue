<template>
  <div style="padding:10px 10px;position: relative">
    <img src="../assets/kongtiao-bg.png" style="position: absolute;right:0;top:0;height:50px;width: 100px">
    <div>
      <div class="control-opr-title">空调</div>
      <div style="width: 70%">
        <!--温度计-->
        <div class="main-container"
             @mousemove="mouseMoving"
             @touchmove.prevent="mouseMoving"
             @mouseup="stopDrag"
             @touchend.stop="stopDrag"
             style="position: absolute;right:0;top:50px;">
          <div class="upper-container" :style="bgStyle">
            <div class="temperature-text">
              <div>{{currentTemperature | round}}</div>
              <div style="font-size:10px;text-align: center;margin-left:2px;">(°c)</div>
            </div>
            <div class="temperature-graduation">
              <div class="temperature-element" v-for="el in temperatureGrades" :key="el" :style="tempElementStyle(el)">
                <span class="temperature-element-line">-</span>
                <span class="temperature-element-number">{{el}}</span><br>
              </div>
            </div>
          </div>
          <div class="lower-container">
            <div class="slider-container" :style="sliderStyle">
              <div class="slider-button"  @touchstart.stop="startDrag">
                <i class="fa fa-thermometer-empty slider-icon"></i>
              </div>
            </div>
          </div>
        </div>
        <!--end-->
        <div class="margin-top10">
          <div class="control-opr-img text-center">
            <div><img src="../assets/switch.png" class="img-class"></div>
            <div class="font-10 color-8a8a8a">开关</div>
          </div>
        </div>
        <div class="">
          <div class="control-opr-img text-center pull-left margin-right15 margin-top25">
            <div><img src="../assets/chushi.png" class="img-class"></div>
            <div class="font-10 color-8a8a8a">除湿</div>
          </div>
          <div class="control-opr-img text-center pull-left margin-right15 margin-top25">
            <div><img src="../assets/songfeng.png" class="img-class"></div>
            <div class="font-10 color-8a8a8a">送风</div>
          </div>
          <div class="control-opr-img text-center pull-left margin-right15 margin-top25">
            <div><img src="../assets/fengsu.png" class="img-class"></div>
            <div class="font-10 color-8a8a8a">风速</div>
          </div>
          <div style="clear: both"></div>
        </div>
        <div>
          <div class="control-opr-img text-center pull-left margin-right15 margin-top25">
            <div><img src="../assets/zhire.png" class="img-class"></div>
            <div class="font-10 color-8a8a8a">制热</div>
          </div>
          <div class="control-opr-img text-center pull-left margin-right15 margin-top25">
            <div><img src="../assets/zhilen.png" class="img-class"></div>
            <div class="font-10 color-8a8a8a">制冷</div>
          </div>
          <div style="clear: both"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Group,GroupTitle,Cell,Panel,Flexbox, FlexboxItem } from 'vux'
  import TweenLite from "gsap/TweenLite";

  const sliderMinX = 0
  const sliderMaxX = 245
  const coldGradient = {
    start: '#bbbbbb',
    end: '#fefefe'
  }
  const hotGradient = {
    start: '#bbbbbb',
    end: '#fefefe'
  };

  export default {
    components: { Group,GroupTitle,Cell,Panel,Flexbox, FlexboxItem},
    name: 'index',
    data () {
      return {
        msg:'',
        temperatureGrades: [30, 25, 20, 15, 10],
        dragging: false,
        initialMouseX: 0,
        sliderX: 0,
        initialSliderX: 0,
        gradientStart: coldGradient.start,
        gradientEnd: coldGradient.end,
        initTemperature:0
      }
    },
    filters: {
      round (num) {
        return Math.round(num)
      }
    },
    computed: {
      sliderStyle () {
        return `transform: translate3d(0, ${ this.sliderX}px, 0);`
      },
      bgStyle () {
        return `background: linear-gradient(to bottom right, ${this.gradientStart}, ${this.gradientEnd});`
      },
      currentTemperature () {
        var _self = this;
        const tempRangeStart = 30;
        const tempRange = 20;
        return tempRangeStart-parseInt((this.sliderX / sliderMaxX * tempRange));
      }
    },
    created(){
      this.init();
    },
    methods:{
      init(){
        var tmp = 27;
        this.sliderX = (30-tmp) * 254 / 20;
      },
      startDrag (e) {
        this.dragging = true
        this.initialMouseX = e.touches[0].pageY
        this.initialSliderX = this.sliderX
      },
      stopDrag () {
        this.dragging = false
      },
      mouseMoving (e) {
        if(this.dragging) {
          const dragAmount = e.touches[0].pageY - this.initialMouseX
          const targetX = this.initialSliderX + dragAmount
          this.sliderX = Math.max(Math.min(targetX, sliderMaxX), sliderMinX)
          let targetGradient = coldGradient
          if (this.currentTemperature >= 25)         {
            targetGradient = hotGradient
          }

          if (this.gradientStart !== targetGradient.start) {
            TweenLite.to(this, 0.7, {
              'gradientStart': targetGradient.start,
              'gradientEnd': targetGradient.end
            })
          }
        }
        e.stopPropagation();
      },
      tempElementStyle (tempNumber) {
        const nearDistance = 3
        const liftDistance = 12

        const diff = Math.abs(this.currentTemperature - tempNumber)
        const distY = (diff / nearDistance) - 1
        const elementY = Math.min(distY * liftDistance, 0)
        return  `transform: translate3d(${elementY}px, 0, 0)`
      }
    }
  }
</script>
