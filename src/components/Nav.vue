<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :router="true"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="/" v-if="false">
      <i class="el-icon-menu" />
      <span slot="title">Hello World 页（测试用）</span>
    </el-menu-item>

    <el-menu-item index="/Home">
      <i class="el-icon-s-home" />
      <span slot="title">主页</span>
    </el-menu-item>

    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-s-marketing"></i>
        <span>股票信息</span>
      </template>
      <el-menu-item index="/Search">
        <i class="el-icon-search" />
        <span slot="title">查询股票</span>
      </el-menu-item>
      <el-menu-item index="/Buy">
        <i class="el-icon-shopping-cart-2" />
        <span slot="title">购买股票</span>
      </el-menu-item>
      <el-menu-item index="/Sell">
        <i class="el-icon-sold-out" />
        <span slot="title">出售股票</span>
      </el-menu-item>
    </el-submenu>

    <el-menu-item index="/Command">
      <i class="el-icon-s-order" />
      <span slot="title">交易信息</span>
    </el-menu-item>

    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-user-solid"></i>
        <span>所持信息</span>
      </template>
      <el-menu-item index="/Stock">
        <i class="el-icon-s-marketing" />
        <span slot="title">持有股票</span>
      </el-menu-item>
      <el-menu-item index="/Finance">
        <i class="el-icon-s-finance" />
        <span slot="title">资金账户</span>
      </el-menu-item>
    </el-submenu>

    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-s-tools"></i>
        <span>设置</span>
      </template>
      <el-menu-item index="/Alert">
        <i class="el-icon-message-solid" />
        <span slot="title">设置提醒</span>
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "Nav"
};
</script>
