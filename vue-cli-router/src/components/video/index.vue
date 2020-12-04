<template>
    <!-- 视屏 小程序,顶部导航栏适应机型高度 和上周六(21/11/29)之前写的底部按钮适配一样 -->
    <view class="main">
    <!-- 顶部按钮适应机型高度 -->
        <view   
            class="head"
            :style="{ height: navHeight + 'px', paddingTop: statusBarHeight + 'px' }">
        <image
            src="../../static/adoption-details/jiantou.png"
            class="jiantou"/>
        </view>
    <!-- 视屏 -->
    <view>
        <video
            id="myVideo"
            @click="stop"
            class="video"
            src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126-lite.m4v"
            :show-fullscreen-btn="false"
            :controls="false"></video>
    </view>
    <cover-view class="main-list">
        <cover-view>
            <cover-image class="icon-user" :src="iconuser" />
            <cover-image class="icon-add" :src="iconadd" />
        </cover-view>
        <cover-view>
        <cover-view class="list" v-for="(item, index) in list" :key="index">
            <cover-image class="icon" :src="item.icon" />
            <cover-view class="text">{{ item.unm }}</cover-view>
        </cover-view>
        </cover-view>
    </cover-view>
    <view class="bottom-user"> {{ bottomuser }} </view>
    <view class="bottom-title">{{ bottomtitle }}</view>
    <view class="bottom-input">
        <view class="bottom-input-bg">
        <image class="icon-edit" :src="iconedit" />
        <input class="input" placeholder="写评论" />
        </view>
        <button class="button">发送</button>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      //顶部按钮适应机型高度 
      navHeight: 0,
      statusBarHeight: 0,
      //视屏
      video: true,
      videoContext:null,
      bottomuser: "@某某某",
      bottomtitle: "猫有黄、黑、白、灰等各种颜色；身形像狸，外貌像老虎呼呼呼",
      iconedit: require("../../static/icon-image/icon-edit.png"),
      iconuser: require("../../static/icon-image/icon-user.png"),
      iconadd: require("../../static/icon-image/icon-add.png"),
      list: [
        {
          icon: require("../../static/icon-image/icon-heart.png"),
          unm: 123,
        },
        {
          icon: require("../../static/icon-image/icon-news.png"),
          unm: 123,
        },
        {
          icon: require("../../static/icon-image/icon-share.png"),
          unm: 123,
        },
      ],
    };
  },
  mounted() {
    this.videoContext = uni.createVideoContext("myVideo", this);
    //获取顶部导航拦和胶囊高度  顶部按钮适应机型高度
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
  //视屏点击暂停，播放
  methods: {
    stop() {
      if (this.video) {
        this.videoContext.pause();
      } else {
        this.videoContext.play();
      }
      this.video = !this.video;
    },
  },
};
</script>
<style scoped>
@import url("./index.css");
</style>