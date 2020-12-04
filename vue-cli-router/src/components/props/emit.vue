<template>
<!-- 子组件  -->
<!-- 小程序底部按钮适配适配iPhone X -->
  <view class="container">
    <view :class="[isIpx ? ipx_button : '','tab-btn','btn_radiu']"  :style="viewStyle">
      <button :style="buttonStyle">
        {{title}}
      </button>
       <button v-if="two" :style="buttonStyleRight">
        {{titleRight}}
      </button>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      ipx_button: "ipx-button",
      isIpx:false,
      isTwo:1,
    };
  },
  props: {
    title:{
        type:String,
        default:''
    },
    titleRight:{
        type:String,
        default:''
    },
    buttonStyle:{
        type:Object,
        default:()=>{}
    },
    buttonStyleRight:{
        type:Object,
        default:()=>{}
    },
    viewStyle:{
        type:Object,
        default:()=>{}
    },
    two:{
        type:Number,
        default:0
    }
  },
  created() {
    console.log(this.isIpx, " 执行了");
    console.log(uni, "uni");
    uni.getSystemInfo({
      success: (res) => {  
        let modelmes = res.model; //手机品牌
        console.log("手机品牌", modelmes);  
        if (modelmes === "iPhone X") {
          this.isIpx = true;
        }
      },
      fail: (res) => {
        console.log("获取失败");
      },
      complete: (res) => {
        console.log("complete");
      },
    });
  },
};
</script>
<style scoped>
.container {
  height: 100%;
  width: 100%;
}
.tab-btn{
    width: 100%;
    position: fixed;
    bottom: 0;
    display:flex;
    justify-content: center;
    align-items: center;
}
.ipx-button{
    bottom: 30rpx;
}
.iphonex-button {
  bottom: 68rpx !important;
}
/* 开启惯性滚动,安卓下默认就有，IOS需要开启 */
page {
  -webkit-overflow-scrolling: touch;
}
</style>