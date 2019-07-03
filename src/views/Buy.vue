<template>
  <div>
    <h1>购买股票</h1>
    <el-form ref="form" :model="form" label-width="96px">
      <el-form-item label="股票代码">
        <el-input v-model="form.id" />
      </el-form-item>
      <el-form-item label="购买价格">
        <el-input v-model="form.price" />
      </el-form-item>
      <el-form-item label="购买数量">
        <el-input v-model="form.amount" />
      </el-form-item>
      <el-form-item label="资金账户">
        <el-select v-model="form.account" placeholder="请选择" style="width: 100%">
          <el-option v-for="account in accounts" :key="account" :label="account" :value="account" />
        </el-select>
      </el-form-item>
      <el-form-item label="交易密码">
        <el-input v-model="form.password" show-password />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">购买</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import server from "@/functions/server";
export default {
  name: "Buy",
  data() {
    return {
      form: {
        id: this.$route.params.id,
        price: null,
        amount: null,
        account: null,
        password: ""
      },
      accounts: []
    };
  },
  methods: {
    onSubmit() {
      server.sendCommand(
        {
          type: true,
          id: this.form.id,
          price: this.form.price,
          amount: this.form.amount,
          finance: this.form.account,
          password: this.form.password
        },
        data => {
          this.$router.push("/Command");
          this.$notify({
            title: "发送购买指令成功",
            type: "success",
            offset: 64
          });
        },
        data => {
          this.$notify({
            title: "发送购买指令失败",
            message: data,
            type: "error",
            offset: 64
          });
        }
      );
    }
  },
  mounted() {
    server.getMyFinances(
      {},
      data => {
        this.accounts = data;
      },
      data => {
        this.$notify({
          title: "获得资金账户列表失败",
          message: data,
          type: "error",
          offset: 64
        });
      }
    );
  }
};
</script>
