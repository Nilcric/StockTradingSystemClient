<template>
  <div>
    <h1>持有股票</h1>
    <el-table :data="tableData">
      <el-table-column prop="id" label="股票代码"/>
      <el-table-column prop="name" label="股票名称"/>
      <el-table-column prop="amount" label="持有数量"/>
      <el-table-column prop="price" label="当前价格"/>
      <el-table-column prop="cost" label="持有成本"/>
      <el-table-column prop="profit" label="收益">
        <template
          slot-scope="scope"
        >{{((scope.row.price - scope.row.cost) * scope.row.amount).toFixed(2)}}</template>
      </el-table-column>
      <el-table-column label="操作" min-width="150">
        <template slot-scope="scope">
          <el-button size="mini">购买</el-button>
          <el-button size="mini">出售</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import server from "@/functions/server";
export default {
  name: "Stock",
  data() {
    return {
      tableData: []
    };
  },
  mounted() {
    let self = this;
    server.getMyStocks(
      {},
      function(response) {
        self.tableData = response;
      },
      function(response) {
        console.log(response);
      }
    );
  }
};
</script>
