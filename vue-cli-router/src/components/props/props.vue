<template>
<!-- 父组件 -->
<view>
	<view>
		<titleBg title="收货地址" :imgState=true style="position: fixed;"></titleBg>
	</view>
    <view class="user-address" v-for="(item,index) in addresslist" :key="index">
        <view>
            <view class="address">{{item.address}}</view>
            <view>
                <view>{{item.text}}</view>
                <view>
                    <view>{{item.name}}</view>
                    <view>{{item.phone}}</view>
                </view>
            </view>
        <image class="iconedit" :src="item.iconedit" />
        </view>
    </view>

    <Tab class="title" :title="title" :titleRight="titleRight" :buttonStyle="buttonStyle"  :buttonStyleRight="buttonStyleRight"   :viewStyle="viewStyle"  :two="isTwo"></Tab>
</view>	
</template>

<script>
import titleBg from "../../components/title-bg/index";
import Tab from "../../components/button-tab/index"
export default {
  data() {
    return {  
      titleRight:"保存",
      title:"新增地址",
      isTwo:1, //true为两个按钮
      buttonStyle:{
        background:'green',
      },
      buttonStyleRight:{
        background:'red',
      },
      viewStyle:{
        width:'80%',
        margin:'0 30rpx',
        outline:'none',
        'border-radius':'38rpx',
        background:'blue',
      },
      addresslist: [
        {
          address: "天津国际贸易中心 C区 259号",
          name: "张先生",
          phone: "15099201102",
          iconedit: require("@/static/icon-image/icon-edit.png"),
        },
        {
          address: "南京路荣业花苑 南西街2001号",
          text: "默认地址",
          name: "李离芯",
          phone: "13729982292",
          iconedit: require("@/static/icon-image/icon-edit.png"),
        },
        {
          address: "南平路万达广场4层A01",
          name: "刘先生",
          phone: "15299200212",
          iconedit: require("@/static/icon-image/icon-edit.png"),
        },
      ],
    };
  },
  components: {
    titleBg,
    Tab,
  },
};
</script>
<style scoped>
.user-address {
  padding-top: 110rpx;
  border-bottom: 2rpx solid #e5e5e5;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 37rpx;
}
.iconedit {
  width: 24rpx;
  height: 26rpx;
}
.address {
  width: 410rpx;
  height: 47rpx;
  font-size: 32rpx;
}
.title{
  color: red;
}
</style>
