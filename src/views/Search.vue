<template>
  <div>
    <h1>查询股票</h1>
    <el-input placeholder="请输入股票名称或代码" v-model="keyword">
      <el-button slot="append" icon="el-icon-search" @click="onSubmit" />
    </el-input>

    <el-divider />

    <el-table ref="table" :data="tableData" highlight-current-row @current-change="onClick">
      <el-table-column prop="stockid" label="股票代码" />
      <el-table-column prop="name" label="股票名称" />
      <el-table-column prop="price" label="最新价" />
      <el-table-column prop="highest_buy_price" label="购买价" />
      <el-table-column prop="lowest_sell_price" label="出售价" />
      <el-table-column label="状态">
        <template slot-scope="scope">{{scope.row.status ? '正常' : '暂停'}}</template>
      </el-table-column>
    </el-table>

    <el-dialog title="股票详情" :visible.sync="showDialog" :before-close="onCloseDialog">
      <el-form v-if="selected" ref="form" :model="selected" label-width="120px" class="table-info">
        <el-form-item label="股票">
          <span>{{selected.stockid}} {{selected.name}}</span>
        </el-form-item>
        <el-form-item label="价格">
          <span>{{selected.price}}</span>
        </el-form-item>
        <el-form-item label="状态">
          <span>{{selected.status ? '正常' : '暂停'}}</span>
        </el-form-item>
        <el-form-item label="购买最高价">
          <span>{{selected.highest_buy_price}}</span>
        </el-form-item>
        <el-form-item label="出售最低价">
          <span>{{selected.lowest_sell_price}}</span>
        </el-form-item>
        <el-form-item label="本日成交价">
          <span>{{selected.lowest_price}} ~ {{selected.highest_price}}</span>
        </el-form-item>
        <el-form-item label="本周成交价">
          <span>{{selected.lowest_price_week}} ~ {{selected.highest_price_week}}</span>
        </el-form-item>
        <el-form-item label="本月成交价">
          <span>{{selected.lowest_price_month}} ~ {{selected.highest_price_month}}</span>
        </el-form-item>
        <el-form-item label="公告">
          <span>{{selected.announcement}}</span>
        </el-form-item>
      </el-form>

      <span>{{selected}}</span>

      <span slot="footer" class="dialog-footer">
        <el-button @click="onCloseDialog">取消</el-button>
        <el-button @click="onBuy" type="primary">购买股票</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import server from "@/functions/server";
export default {
  name: "Search",
  data() {
    return {
      keyword: "",
      tableData: [],
      page: 0,
      perpage: 20,
      showDialog: false,
      selected: null
    };
  },
  methods: {
    onSubmit() {
      server.getStocks(
        {
          name: this.keyword,
          from: this.page * this.perpage,
          to: (this.page + 1) * this.perpage
        },
        data => {
          this.tableData = data.infos;
          this.$notify({
            title: "获取股票列表成功",
            type: "success",
            offset: 64
          });
        },
        data => {
          this.$notify({
            title: "获取股票列表失败",
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
    onBuy() {
      this.$router.push("/Buy/" + this.selected.stockid);
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
