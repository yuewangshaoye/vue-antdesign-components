<template>
  <div>
    <div class="main">
      <div>
        <a-row>
          <a-col :span="5" class="top">
            <a-avatar :src="item.avatar == 'demo' ? img : item.avatar" />
          </a-col>
          <a-col :span="10" class="topright">
            <span
              ><h1 style="font-weight: 300">{{ item.username }}</h1></span
            >
          </a-col></a-row
        >
      </div>
      <div class="center">
        <div>
          <a-statistic
            title="活跃用户"
            :value="item.number"
            :value-style="{ color: '#595959', fontSize: '28px' }"
          >
            <template #suffix>
              <span style="font-size: 22px; color: #595959">万</span>
            </template>
          </a-statistic>
        </div>
        <div>
          <a-statistic
            title="新增用户"
            :value="item.num"
            :value-style="{ color: '#595959', fontSize: '30px' }"
          >
          </a-statistic>
        </div>
      </div>

      <div class="bottom">
        <a-icon
          style="color: #8a8b8c; font-size: 26px"
          type="vertical-align-bottom"
        />
        <a-divider type="vertical" style="height: 18px" />
        <a-icon style="color: #8a8b8c; font-size: 23px" type="edit" />
        <a-divider type="vertical" style="height: 18px" />
        <a-icon style="color: #8a8b8c; font-size: 24px" type="share-alt" />
        <a-divider type="vertical" style="height: 18px" />
        <a-icon style="color: #8a8b8c; font-size: 24px" type="ellipsis" />
      </div>
    </div>
  </div>
</template>
<script>
import Api from "@/request/api-manager/user.js";
export default {
  data() {
    return {
      item: {}
    };
  },
  methods: {
    loadOneUser() {
      Api.queryByIdSysUser().then((resp) => {
        console.log("resp:", resp.result);
        this.item = resp.result;
        this.item.avatar = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603773460898&di=ef5b368bf34efe0c3ed4beb02e016acc&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F57%2F28%2F01300000921826141405283668131.jpg";
      });
    },
  },
  mounted() {
    this.loadOneUser();
  },
};
</script>

<style scoped>
.main {
  margin: 0 auto;
  width: 400px;
  height: 900px;
  box-shadow: darkgrey 10px 10px 30px 5px;
}
.center {
  text-align: center;
  margin-top: 0px;
  display: flex;
  justify-content: space-evenly;
}
.bottom {
  height: 66px;
  font-size: 30px;
  background: #f7f9fa;
  margin-top: 8px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-top: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
}
.top {
  margin-top: 30px;
  margin-left: 5px;
  margin-right: 6px;
}
.topright {
  margin-top: 26px;
  margin-left: -46px;
}
div {
  text-align: center;
  margin-top: 8px;
}
/deep/ .ant-statistic-title {
  margin-bottom: 4px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 20px;
}
</style>