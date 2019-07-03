<template>
  <div>
    <h1>资金帐户</h1>

    <h3>可用资金：¥ {{balance}}</h3>
    <p>可用资金指投资者可以用来购买股票或者立即取出的资金数额。</p>
    <h3>冻结资金：¥ {{frozen}}</h3>
    <p>冻结资金指投资者已经发出股票购买指令所需要的资金，虽然股票购买指令尚未执行，但是这部分资金已经冻结。当投资者发出撤销指令成功，冻结的资金又可以转化为可用资金。</p>

    <el-divider />

    <el-button type="primary" @click="showChangePassword=true">修改登录密码</el-button>
    <el-button type="primary" @click="showChangeTransactionPassword=true">修改交易密码</el-button>

    <el-dialog title="修改登录密码" :visible.sync="showChangePassword">
      <el-form v-if="selected" :model="selected" label-width="120px" class="table-info">
        <el-form-item label="新密码">
          <el-input v-model="selected.passwd" show-password />
        </el-form-item>
        <el-form-item label="重复密码">
          <el-input v-model="selected.passwd2" show-password />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onChangePassword">确认</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <el-dialog title="修改交易密码" :visible.sync="showChangeTransactionPassword">
      <el-form v-if="selected" :model="selected" label-width="120px" class="table-info">
        <el-form-item label="旧密码">
          <el-input v-model="selected.old" show-password />
        </el-form-item>
        <el-form-item label="新密码">
          <el-input v-model="selected.passwd" show-password />
        </el-form-item>
        <el-form-item label="重复密码">
          <el-input v-model="selected.passwd2" show-password />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onChangeTransactionPassword">确认</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import server from "@/functions/server";
export default {
  name: "Finance",
  data() {
    return {
      balance: 0,
      frozen: 0,
      tableData: [],
      showDialog: false,
      showChangePassword: false,
      showChangeTransactionPassword: false,
      selected: {
        passwd: null,
        passwd2: null,
        old: null
      }
    };
  },
  methods: {
    onChangePassword() {
      if (this.selected.passwd != this.selected.passwd2) {
        return this.$notify({
          title: "密码不一致",
          type: "error",
          offset: 64
        });
      }
      server.setFinancePassword(
        {
          id: this.selected.id,
          passwd: this.selected.passwd
        },
        data => {
          this.showChangePassword = false;
          this.onCloseDialog();
          this.$notify({
            title: "修改密码成功",
            type: "success",
            offset: 64
          });
        },
        data => {
          this.$notify({
            title: "修改密码失败",
            message: data,
            type: "error",
            offset: 64
          });
        }
      );
    },
    onChangeTransactionPassword() {
      if (this.selected.passwd != this.selected.passwd2) {
        return this.$notify({
          title: "密码不一致",
          type: "error",
          offset: 64
        });
      }
      server.setFinanceTransactionPassword(
        {
          id: this.selected.id,
          passwd0: this.selected.old,
          passwd: this.selected.passwd
        },
        data => {
          this.showChangeTransactionPassword = false;
          this.onCloseDialog();
          this.$notify({
            title: "修改密码成功",
            type: "success",
            offset: 64
          });
        },
        data => {
          this.$notify({
            title: "修改密码失败",
            message: data,
            type: "error",
            offset: 64
          });
        }
      );
    }
  },
  mounted() {
    server.getFinance(
      {
        id: localStorage["username"]
      },
      data => {
        this.balance = data.balance_x100 / 100;
        this.frozen = data.frozen_balance_x100 / 100;
      },
      data => {
        this.$notify({
          title: "获取资金账户信息失败",
          message: data,
          type: "error",
          offset: 64
        });
      }
    );
  }
};
</script>

<style>
.table-info label {
  color: #99a9bf;
}
</style>
