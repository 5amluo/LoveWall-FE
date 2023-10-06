<template>
  <sidebar></sidebar>
  <div class="parent">
    <div class="child">
      <h2 class="glowing-text">
        <span>得成比目何辞死，</span><span>愿作鸳鸯不羡仙~</span>
      </h2>
      <el-form>
        <el-form-item>
          <el-input
              v-model="form.confession"
              :rows="2"
              type="textarea"
              placeholder="心动不如行动"
              class="custom-input"
          />
        </el-form-item>
        <el-form-item class="custom-form-item">
          <el-select v-model="form.confession_id" placeholder="请选择是否公开" class="stacked-select">
            <el-option label="匿名" value="1" />
            <el-option label="公开" value="2" />
          </el-select>
        </el-form-item>
      </el-form>

      <nav class="cloud-effect">
        <button class="effect-button" @click="handleClick();clear();" >
          提笔诉请
          <span></span><span></span><span></span><span></span>
        </button>

        <button class="effect-button" @click="clear">
          欲说还休
          <span></span><span></span><span></span><span></span>
        </button>
      </nav>

    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref,reactive,h} from "vue";
import { ElNotification } from "element-plus";
import addStore from "../store/addStore.js";
import axios from "axios";
import sidebar from "../components/sidebar.vue";


const NewaddStore = addStore();

const form = reactive({
  confession:'',
  confession_id: null,
  user_id: 0
});

const clear = () => {
  form.confession_id = null
  form.confession = ""
}
//发送
const res = ref(null);
const handleClick = async () => {
  if (form.confession_id === null || form.confession === '') {
    ElNotification({
      title: "失败。。。。",
      message: h("i", {style: "color: teal"}, "请输入内容，选择公开情况以后再发布吧！"),
    });
  } else {
      try {
        const response = await axios.post("https://mock.apifox.cn/m1/3336188-0-default/api/control/confession", form);
        res.value = response.data;
        console.log(response.data);
        if (res.value.msg === "ok" && res.value.code === 200) {
          localStorage.setItem('isLogin', 'true');
          ElNotification({
            title: "发布成功！",
            message: h("i", {style: "color: teal"}, "好好好"),
          });
          NewaddStore.setAddInfo(res.value.data);//不知道有没有问题，后端这里是要返回多少东西？
          console.log(NewaddStore.addSession);
        }
        else {alert("还没写其他情况")}
        }
      catch (error) {
        alert("上传失败");
        console.error(error);
        if (error.response) {
          console.log(error.response.data);
        }
      }

    }
}


</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.parent {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.child {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.custom-form-item {
  margin-top: 50px; /* 调整上边距 */
  margin-bottom: 20px; /* 调整下边距 */
  margin-left: 40px; /* 调整左边距 */
  margin-right: 10px; /* 调整右边距 */
}


.glowing-text {
  font-size: 24px;
  margin-bottom: 15px;
  color: #7fa1e7;
  text-transform: uppercase;
  letter-spacing: 5px;
  cursor: pointer;
}

.glowing-text span {
  transition: 0.5s;
}

.glowing-text:hover span:nth-child(1) {
  margin-right: 10px;
  color: #8dcdef;
  text-shadow: 0 0 10px #fff,
  0 0 20px #fff,
  0 0 40px #fff,
  0 0 80px #fff,
  0 0 120px #fff,
  0 0 160px #fff;
}

.glowing-text:hover span:nth-child(2) {
  margin-left: 40px;
  color: #8dcdef;
  text-shadow: 0 0 10px #fff,
  0 0 20px #fff,
  0 0 40px #fff,
  0 0 80px #fff,
  0 0 120px #fff,
  0 0 160px #fff;
}

.custom-input {
  width: 300px;
  font-size: 16px;
  margin-bottom: 15px;
  position: relative;
  top: 50px;
}


.cloud-effect .effect-button {
  --c: #e89d9d;
  background-color: transparent; /* 为按钮添加透明背景 */
  color: var(--c);
  border: 3px solid var(--c);
  border-radius: 100px;
  text-align: center;
  line-height: 60px;
  font-weight: bold;
  cursor: pointer;
  margin: 10px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: 0.5s;
  font-family: inherit; /* 保证按钮继承页面的字体设置 */
  font-size: inherit;
  outline: none; /* 去除按钮聚焦时的外框 */
  top: -20px;
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  height: 60px; /* 设置按钮的高度，根据需要调整 */
  width: 130px; /* 设置按钮的宽度，根据需要调整 */
}

.cloud-effect .effect-button:hover {
  color: #222;
}

.cloud-effect .effect-button span {
  position: absolute;
  width: 25%;
  height: 100%;
  background-color: var(--c);
  border-radius: 50%;
  transform: translateY(150%);
  left: calc((var(--n) - 1) * 25%);
  transition: 0.5s;
  z-index: -1;
}

.cloud-effect .effect-button:hover span {
  transform: translateY(0) scale(2);
}

.cloud-effect .effect-button span:nth-child(1) { --n:1; }
.cloud-effect .effect-button span:nth-child(2) { --n:2; }
.cloud-effect .effect-button span:nth-child(3) { --n:3; }
.cloud-effect .effect-button span:nth-child(4) { --n:4; }

</style>
