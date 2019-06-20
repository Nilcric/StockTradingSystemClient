<template>
  <div>
    <h1>
      <i class="el-icon-circle-check"/>
      交易状态：{{state}}（已完成）
    </h1>

    <h3>远望谷 {{id}}</h3>
    <p>成交价格：{{price}}</p>
    <p>购买数量：{{amount}}</p>
    <p>购买时间：{{buyTime}}</p>
    <p>成交时间：{{acceptTime}}</p>
  </div>
</template>


<script>
import server from "@/functions/server";
export default {
  name: "Result",
  data() {
    return {
      state: 0,
      id: null,
      price: null,
      amount: null,
      buyTime: null,
      acceptTime: null
    };
  },
  mounted() {
    let self = this;
    server.getCommandState(
      {
        id: self.$route.params.id
      },
      function(response) {
        self.state = response["state"];
        self.id = response["id"];
        self.price = response["price"];
        self.amount = response["amount"];
        self.buyTime = response["buyTime"];
        self.acceptTime = response["acceptTime"];
      },
      function(response) {
        console.log(response);
      }
    );
  }
};
</script>
