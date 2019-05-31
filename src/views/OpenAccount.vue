<template>
  <div class="login">
    <el-row>
      <el-col :span="18" :offset="3">
        <el-steps :active="active" simple finish-status="success">
          <el-step title="步骤 1" icon="el-icon-edit"></el-step>
          <el-step title="步骤 2" icon="el-icon-upload"></el-step>
          <el-step title="步骤 3" icon="el-icon-picture"></el-step>
        </el-steps>
      </el-col>
    </el-row>

    <br>

    <el-row v-if="active==0">
      <el-col :span="12" :offset="4">
        <el-form ref="form" :model="form" label-width="96px">
          <el-form-item label="代理商">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="证券账户名">
            <el-input v-model="form.name"/>
          </el-form-item>
          <el-form-item label="证券账户密码">
            <el-input v-model="form.pass" show-password/>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="next">下一步</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>

    <el-row v-if="active==1">
      <el-col :span="12" :offset="4">
        <el-form ref="form" :model="form" label-width="96px">
          <el-form-item label="代理商">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="证券账户名">
            <el-input v-model="form.name"/>
          </el-form-item>
          <el-form-item label="证券账户密码">
            <el-input v-model="form.pass" show-password/>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="last">上一步</el-button>
            <el-button type="primary" @click="next">下一步</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>

    <el-row v-if="active==2">
      <el-col :span="12" :offset="4">
        <el-form ref="form" :model="form" label-width="96px">
          <el-form-item label="代理商">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="证券账户名">
            <el-input v-model="form.name"/>
          </el-form-item>
          <el-form-item label="证券账户密码">
            <el-input v-model="form.pass" show-password/>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="last">上一步</el-button>
            <el-button type="primary" @click="next">下一步</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      active: 0,
      options: [
        {
          value: "选项1",
          label: "中信证券"
        },
        {
          value: "选项2",
          label: "国泰君安"
        },
        {
          value: "选项3",
          label: "广发证券"
        },
        {
          value: "选项4",
          label: "银河证券"
        },
        {
          value: "选项5",
          label: "海通证券"
        }
      ],
      value: "",
      form: {
        securitiesAccountName: null,
        securitiesAccountpass: null
      }
    };
  },
  methods: {
    next() {
      if (this.active++ > 2) this.active = 0;
    },
    last() {
      this.active--;
    },
    final() {}
  }
};
</script>

<style>
.login {
  padding: 64px 0;
}
</style>
