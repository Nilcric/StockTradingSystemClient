<template>
  <el-menu default-active="2" class="el-menu-vertical-demo" :router="true">
    <el-menu-item index="/">
      <i class="el-icon-menu"/>
      <span slot="title">Hello World 页（测试用）</span>
    </el-menu-item>
    <el-menu-item index="/Home">
      <i class="el-icon-s-home"/>
      <span slot="title">主页</span>
    </el-menu-item>
    <el-menu-item index="/Stock">
      <i class="el-icon-s-marketing"/>
      <span slot="title">持有股票</span>
    </el-menu-item>
    <el-menu-item index="/Finance">
      <i class="el-icon-s-finance"/>
      <span slot="title">资金账户</span>
    </el-menu-item>
    <el-menu-item index="Buy">
      <i class="el-icon-shopping-cart-2"/>
      <span slot="title">购买股票</span>
    </el-menu-item>
    <el-menu-item index="Sell">
      <i class="el-icon-sold-out"/>
      <span slot="title">出售股票</span>
    </el-menu-item>
    <el-menu-item index="Command">
      <i class="el-icon-sold-out"/>
      <span slot="title">撤销指令</span>
    </el-menu-item>
    <el-menu-item index="Search">
      <i class="el-icon-search"/>
      <span slot="title">查询股票</span>
    </el-menu-item>
    <el-menu-item index="Alert">
      <i class="el-icon-bell"/>
      <span slot="title">设置提醒</span>
    </el-menu-item>
    <el-menu-item index="Setting">
      <i class="el-icon-key"/>
      <span slot="title">修改密码</span>
    </el-menu-item>
    <el-menu-item index="SetTransactionPasswd">
      <i class="el-icon-key"/>
      <span slot="title">修改交易密码</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "Nav"
};
</script>
