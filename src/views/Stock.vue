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
export default {
  name: "Stock",
  data() {
    return {
      tableData: [
        {
          id: "300059",
          name: "东方财富",
          amount: 140.3,
          price: 12.32,
          cost: 12.81,
          profit: 13.92
        },
        {
          id: "000066",
          name: "中国长城",
          amount: 107.1,
          price: 10.23,
          cost: 9.74,
          profit: 21.42
        },
        {
          id: "002161",
          name: "远望谷",
          amount: 93.7,
          price: 7.92,
          cost: 8.28,
          profit: -8.03
        },
        {
          id: "002195",
          name: "二三四五",
          amount: 84.98,
          price: 5.1,
          cost: 4.5,
          profit: 13.92
        },
        {
          id: "002131",
          name: "利欧股份",
          amount: 70.04,
          price: 2.04,
          cost: 2.1,
          profit: 21.42
        },
        {
          id: "002177",
          name: "御银股份",
          amount: 65.23,
          price: 6.23,
          cost: 5.1,
          profit: -8.03
        }
      ]
    };
  }
};
</script>
