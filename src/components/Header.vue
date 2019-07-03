<template>
  <div class="header-container">
    <div class="header-item">股票交易系统 - 交易客户端</div>
    <div class="header-item header-item-right">
      <span v-if="username">
        <i class="el-icon-user" />
        {{username}}
        <el-button type="info" @click="onLogout">退出登录</el-button>
      </span>
      <!--router-link to="Login">
        <el-button to="Login">登录</el-button>
      </router-link>
      <router-link to="OpenAccount">
        <el-button to="OpenAccount">开户</el-button>
      </router-link-->
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      username: localStorage["username"]
    };
  },
  methods: {
    onLogout() {
      this.$root.$emit("logout");
    }
  }
};
</script>

<style>
.header-container {
  color: #fff;
  background-color: #545c64;
  display: flex;
  align-items: center;
  padding: 0 16px;
  height: 100%;
}

.header-item {
  margin: 0 16px;
}

.header-item-right {
  flex: 1;
  text-align: right;
}
</style>
