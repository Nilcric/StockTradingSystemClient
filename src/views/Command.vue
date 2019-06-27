<template>
  <div>
    <h1>交易信息</h1>

    <el-table ref="table" :data="tableData" highlight-current-row @current-change="onClick">
      <el-table-column prop="stockid" label="股票代码"/>
      <el-table-column prop="name" label="股票名称"/>
      <el-table-column label="指令">
        <template slot-scope="scope">{{scope.row.type ? '购买' : '出售'}}</template>
      </el-table-column>
      <el-table-column prop="price" label="价格"/>
      <el-table-column prop="amount" label="待成交数量"/>
      <el-table-column prop="total" label="总数量"/>
      <el-table-column label="状态">
        <template slot-scope="scope">{{['进行中', '已完成', '已撤销'][scope.row.state]}}</template>
      </el-table-column>
    </el-table>

    <el-dialog title="指令详情" :visible.sync="showDialog" :before-close="onCloseDialog">
      <el-form v-if="selected" ref="form" :model="selected" label-width="120px" class="table-info">
        <el-form-item label="指令编号">
          <span>{{selected.instid}}</span>
        </el-form-item>
        <el-form-item label="股票名称">
          <span>{{selected.stockid}} {{selected.name}}</span>
        </el-form-item>
        <el-form-item label="指令">
          <span>{{selected.type ? '购买' : '出售'}}</span>
        </el-form-item>
        <el-form-item label="价格">
          <span>{{selected.price}}</span>
        </el-form-item>
        <el-form-item label="待成交数量">
          <span>{{selected.amount}}</span>
        </el-form-item>
        <el-form-item label="总数量">
          <span>{{selected.total}}</span>
        </el-form-item>
        <el-form-item label="交易时间">
          <span>{{selected.time}}</span>
        </el-form-item>
        <el-form-item label>
          <el-table v-if="selected" ref="table2" :data="selected.records">
            <el-table-column prop="price" label="成交价"/>
            <el-table-column prop="amount" label="已成交数量"/>
          </el-table>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="onCloseDialog">取消</el-button>
        <el-button @click="onRevoke" type="primary">撤销指令</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import server from "@/functions/server";
import { setTimeout } from "timers";
export default {
  name: "Commands",
  data() {
    return {
      tableData: [],
      selected: null,
      showDialog: false
    };
  },
  methods: {
    onSubmit() {
      server.getCommands(
        {},
        data => {
          this.tableData = data.infos;
          this.$notify({
            title: "获取指令列表成功",
            type: "success",
            offset: 64
          });
          for (var i in this.tableData) {
            this.tableData[i].total =
              this.tableData[i].amount +
              this.tableData[i].records.reduce((x, item) => x + item.amount, 0);
            server.getStock(
              {
                id: this.tableData[i].stockid
              },
              data => {
                this.tableData[i].name = data.name;
              },
              () => {}
            );
          }
        },
        data => {
          this.$notify({
            title: "获取指令列表失败",
            message: data,
            type: "error",
            offset: 64
          });
        }
      );
    },
    onClick(val) {
      this.selected = val;
      if (val) {
        this.showDialog = true;
      }
    },
    onCloseDialog() {
      this.showDialog = false;
      setTimeout(() => {
        this.$refs.table.setCurrentRow();
      }, 500);
    },
    onRevoke() {
      server.revokeCommand(
        {
          instid: this.selected.instid,
          userid: localStorage["username"]
        },
        data => {
          this.selected.state = 2;
          this.onCloseDialog();
          this.$notify({
            title: "撤销指令成功",
            type: "success",
            offset: 64
          });
        }
      );
    }
  },
  mounted() {
    this.onSubmit();
  }
};
</script>

<style>
.table-info label {
  color: #99a9bf;
}
</style>
