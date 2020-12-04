<template>
    <view class="home-banner">
    <!-- 轮播图 -->
        <swiper
            class="swiper"
            circular="true"
            indicator-dots="true"
            autoplay="true"
            interval="2000"
            duration="500"
            indicator-active-color="#FFFFFF">
        <swiper-item v-for="(item, index) in slide" :key="index">
            <image class="banner" :src="item.img" mode="aspectFill" />
        </swiper-item>
        </swiper>
    <!-- 顶部按钮适配机型高度 -->
    <view
        class="head"
        :style="{ height: navHeight + 'px', paddingTop: statusBarHeight + 'px' }">
        <view class="address-box">
        <image
            src="../../static/adoption-details/jiantou.png"
            class="jiantou"/>
    </view>
        <view class="title">屎官日记</view>
    </view>
    <view :style="{ height: navHeight + 'px', paddingTop: statusBarHeight + 'px' }"/>
    <!-- 图文搜索按钮 -->
     <view class="inputbox">
        <image src="../../static/nearby/search.png" class="search">
        <input class="input" focus placeholder="请输入搜索内容" />
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      //顶部按钮适配机型高度
      navHeight: 0,
      statusBarHeight: 0,
      //轮播图
      slide: [
        {
          img: require("../../static/banner.png"),
        },
        {
          img: require("../../static/banner.png"),
        },
        {
          img: require("../../static/banner.png"),
        },
      ],
    };
  },
  mounted() {
    //获取顶部导航拦和胶囊高度  小程序顶部按钮适配机型高度
    uni.getSystemInfo({
      success: (res) => {
        const menuButton = uni.getMenuButtonBoundingClientRect(); // 胶囊
        const navBarPadding = (menuButton.top - res.statusBarHeight) * 2;
        let statusBarHeight = res.statusBarHeight;
        let navHeight = menuButton.height + navBarPadding;
        let headerHeight = navHeight + statusBarHeight;
        this.navHeight = navHeight;
        this.statusBarHeight = statusBarHeight;
      },
    });
  },
};
</script>

<style scoped>
@import url("./witness-banner.css");
</style>