<template>
  <aside class="sidebar">
    <div class="logo">
      <h2>头像</h2>
    </div>
    <ul class="links">
      <h4>菜单</h4>
      <li>
        <el-icon><House /></el-icon>
        <router-link to="/Information">个人信息</router-link>
      </li>
      <li>
        <el-icon><ChatDotRound /></el-icon>
        <router-link to="/Express">表白发布</router-link>
      </li>
      <li>
        <el-icon><Files /></el-icon>
        <router-link to="Change">表白管理</router-link>
      </li>
      <li>
        <el-icon><View /></el-icon>
        <router-link to="Talking">社区</router-link>
      </li>

      <li class="logout-link">
        <el-icon><CircleCloseFilled /></el-icon>
        <a @click="HandleClick" >退出登录</a>
      </li>
    </ul>
  </aside>
</template>

<script setup>
import {useRouter} from "vue-router";
import {ElNotification} from "element-plus";
import {h} from "vue";
const router = useRouter();

const HandleClick = () =>{
  localStorage.removeItem('isLogin');
  ElNotification({
    title: "退出登录！！",
    message: h("i", { style: "color: teal" }, "快去行动吧！"),
  });
  router.push({ name: 'Home' });
}


defineEmits(['s'])
</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  height: 100vh;
  width: 100%;
}

.sidebar {
  position: fixed;
  top: 20%;
  left: 0;
  width: 30px;
  height: 48%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: rgb(247, 209, 215);
  backdrop-filter: blur(0px);
  --webkit-backdrop-filter: blur(17px);
  border-right: 1px solid rgb(247, 209, 215);
  transition: width 0.3s ease;
  padding-top: 10px;  /* added a padding at the top */
  padding-bottom: 10px;  /* added a padding at the bottom */
}

.sidebar:hover {
  width: 260px;
}

.sidebar .logo {
  color: #000;
  display: flex;
  align-items: center;
  padding: 25px 10px 15px;
}

.logo img {
  width: 43px;
  border-radius: 50%;
}

.logo h2 {
  font-size: 1.15rem;
  font-weight: 600;
  margin-left: 15px;
  display: none;
  margin-top: 10px;  /* adjusted margin to vertically align the icon */
}

.sidebar:hover .logo h2 {
  display: block;
}

.sidebar .links {
  list-style: none;
  margin-top: 20px;
  overflow-y: auto;
  scrollbar-width: none;
  height: calc(100% - 140px);
}

.sidebar .links::-webkit-scrollbar {
  display: none;
}

.links li {
  display: flex;
  border-radius: 4px;
  align-items: center;
  height: 50px;  /* fixed height for each list item */
  justify-content: center;  /* center items horizontally */
}

.links li:hover {
  cursor: pointer;
  background: #fff;
}

.links h4 {
  color: #222;
  font-weight: 500;
  display: none;
  margin-bottom: 10px;
}

.sidebar:hover .links h4 {
  display: block;
}

.links hr {
  margin: 10px 8px;
  border: 1px solid #4c4c4c;
}

.sidebar:hover .links hr {
  border-color: transparent;
}

.links li span {
  padding: 12px 10px;
}

.links li a {
  padding: 10px;
  color: #000;
  display: none;
  font-weight: 500;
  white-space: nowrap;
  text-decoration: none;
}

.sidebar:hover .links li a {
  display: block;
}

.links .logout-link {
  margin-top: 20px;
}
</style>
