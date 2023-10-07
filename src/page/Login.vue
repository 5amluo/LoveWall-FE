<template>
  <div class="container">

    <div class="title">用户登录</div>

    <el-form
        ref="ruleFormRef"
        :model="form"
        :rules="rules"
        status-icon
        label-width="120px">

      <el-form-item label="账号" prop="account">
        <el-input v-model="form.account" />
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
        <el-button @click="onReset">重置</el-button>
      </el-form-item>

    </el-form>

  </div>
</template>

<script setup>

import { reactive , h , ref } from 'vue';
import loginStore from "../store/loginStore.js";
import userStore from "../store/userStore.js";
import {useRouter} from "vue-router";
import axios from "axios";
import {ElNotification} from "element-plus";

const NewuserStore = userStore();
const NewloginStore = loginStore();
const router = useRouter();



//校验

const ruleFormRef = ref(null)
const form = reactive({
  account: '',
  password: '',
})

const rules = reactive({
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  account: [{ required: true, message: '请输入账号', trigger: 'blur' }],
})


//数据返回和存储
const res = ref(null); // 使用 ref 创建响应式引用,接收数据返回

const onSubmit = async () => {
  if(form.account === "" || form.password ===""){
    ElNotification({
      title: "输入错误！",
      message: h("i", { style: "color: teal" }, "请确保填入完整信息！"),
    });
  }else{
  try {
    const response = await axios.post("https://mock.apifox.cn/m1/3336188-0-default/api/user/login", form.value);
    res.value = response.data;
    console.log(res.value );

    if(res.value.msg === "ok" && res.value.code === 200){
      localStorage.setItem('isLogin', 'true');
      ElNotification({
        title: "登陆成功！",
        message: h("i", { style: "color: teal" }, "欢迎来到心动频率局！"),
      });
      NewloginStore.setLogin(true);//登录状态存储
      NewuserStore.setUserInfo(res.value);//用户信息存储
      router.push({ name: 'Express' });
    }
    else if(res.value.msg === "密码错误" && res.value.code  === 402){
      ElNotification({
        title: "登陆失败！",
        message: h("i", { style: "color: teal" }, "密码错了哦~"),
      });
    }
    else if(res.value.msg=== "账号不存在" && res.value.code  === 401){
      ElNotification({
        title: "登陆失败！",
        message: h("i", { style: "color: teal" }, "不存在该账号呢~"),
      });
    }else{
      alert("什么鬼？！")
    }

  }
  catch (error) {
    alert("上传失败");
    console.error(error);
    if (error.response) {
      console.log(error.response.data);
    }}}
}

//store？


const onReset = () => {
  form.account = ''
  form.password = ''
}


</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  position: relative;
  top: 20px; /* 上下移动 */
  left: -40px; /* 左右移动 */

}

.title {
  font-size: 1.6rem;
  margin-bottom: 20px;
  position: relative;
  top: -20px; /* 上下移动 */
  left: 25px; /* 左右移动 */
}
</style>

