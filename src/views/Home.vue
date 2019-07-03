<template>
  <div>
    <h1>股票交易系统 - 交易客户端</h1>
    <p>实现股票交易客户端的相关业务逻辑。开发用户界面，包括用户客户端申请，首次登陆，登陆，查看股票价格，查询资金账户里面的现金，查询证券账户里面的股票情况，发出购买和出售股票信息，显示交易结果。</p>

    <el-divider />

    <h1>账户信息</h1>

    <h3>基本信息</h3>
    <el-form v-if="info" ref="form" :model="info" label-width="120px" class="table-info">
      <el-form-item label="ID">
        <span>{{info.id}}</span>
      </el-form-item>
      <el-form-item label="用户名">
        <span>{{info.id_card_no}}</span>
      </el-form-item>
      <el-form-item label="种类">
        <span>{{info.type}}</span>
      </el-form-item>
      <el-form-item label="姓名">
        <span>{{info.name}}</span>
      </el-form-item>
      <el-form-item label="性别">
        <span>{{info.sex}}</span>
      </el-form-item>
      <el-form-item label="地址">
        <span>{{info.address}}</span>
      </el-form-item>
      <el-form-item label="职业">
        <span>{{info.profession}}</span>
      </el-form-item>
      <el-form-item label="学历">
        <span>{{info.education}}</span>
      </el-form-item>
      <el-form-item label="工作单位">
        <span>{{info.workplace}}</span>
      </el-form-item>
      <el-form-item label="联系电话">
        <span>{{info.telephone}}</span>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import server from "@/functions/server";
export default {
  name: "Home",
  data() {
    return {
      info: null
    };
  },
  mounted() {
    server.getMyInfo(
      {},
      data => {
        this.info = data;
      },
      data => {
        this.$notify({
          title: "获得个人信息失败",
          message: data,
          type: "error",
          offset: 64
        });
      }
    );
  }
};
</script>
