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
      <el-table-column prop="amount" label="待交易数量"/>
      <el-table-column label="状态">
        <template slot-scope="scope">{{['进行中', '已完成', '已撤销'][scope.row.state]}}</template>
      </el-table-column>
    </el-table>

    <el-dialog title="指令详情" :visible.sync="showDialog" :before-close="onCloseDialog">
      <span>{{selected}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="onCloseDialog">取消</el-button>
        <el-button @click="onRevoke" type="primary">撤销指令</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import server from "@/functions/server";
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
      this.$refs.table.setCurrentRow();
    },
    onRevoke() {}
  },
  mounted() {
    this.onSubmit();
  }
};
</script>
