<template>
  <div class="container">
    <div class="title">用户注册</div>
    <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        status-icon
        label-width="120px"
        class="demo-ruleForm"
    >


      <el-form-item label="用户名" prop="username">
        <el-input v-model.number="ruleForm.username" />
      </el-form-item>


      <el-form-item label="账号" prop="account">
        <el-input v-model.number="ruleForm.account" />
      </el-form-item>


      <el-form-item label="输入密码" prop="password">
        <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
      </el-form-item>


      <el-form-item label="确认密码" prop="checkPass">
        <el-input
            v-model="ruleForm.checkPass"
            type="password"
            autocomplete="off"
        />
      </el-form-item>



      <el-form-item>
        <el-button type="primary" @click="submitForm">注册</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>


    </el-form>


  </div>


</template>

<script setup>
import { reactive, ref, h } from 'vue'
import {useRouter} from "vue-router";
import {ElNotification} from "element-plus";
import loginStore from "../store/loginStore.js";
import userStore from "../store/userStore.js";
import axios from "axios";

const NewuserStore = userStore();
const NewloginStore = loginStore();
const router = useRouter();


//注册前
const ruleFormRef = ref(null)
const ruleForm = reactive({
  account: '',
  password: '',
  checkPass: '',
  username: ''
})
const validatePass = (rule, value, callback) => {
  if (value !== ruleForm.password) {
    callback(new Error('两次密码不一致!'));
  } else {
    callback();
  }
};
const rules = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  checkPass: [
      { required: true, message: '请再次输入密码', trigger: 'blur' },
      { validator: validatePass, trigger: 'blur' }
  ],
  account: [{ required: true, message: '请输入账号', trigger: 'blur' }],
})

const resetForm = () => {
  ruleFormRef.value.resetFields()
}

const ruleForm1 = reactive({
  account: '',
  password: '',
  username: ''
})

//注册中
const res = ref(null);
const submitForm = async () => {//逻辑要改
  try{
    const response = await axios.post("https://mock.apifox.cn/m1/3336188-0-default/api/user/reg",ruleForm1.value);
    res.value = response.data;
    console.log(response.data);
    if(res.value.msg === "ok" && res.value.code === 200){
      localStorage.setItem('isLogin', 'true');
      ElNotification({
        title: "注册成功！",
        message: h("i", { style: "color: teal" }, "欢迎回到心动频率局！"),
      });
      NewloginStore.setLogin(true);//登录状态存储
      router.push({ name: 'Express' });
      //现在没有返回需要的数据，需要注释掉  NewuserStore.setUserInfo(res.data);//用户信息存储
    }
    else{
      alert("还没写其他情况")
    }
  }
  catch (error) {
    alert("上传失败");
    console.error(error);
    if (error.response) {
      console.log(error.response.data);
    }
}}


//stores


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


