<template>
  <div class="container">

    <div class="title">
  <span class="special-effect">心</span>
  <span class="special-effect">动</span>
  <span class="special-effect">频</span>
  <span class="special-effect">率</span>
  <span class="special-effect">局</span>
</div>

    <router-link v-for="btn in buttons" :key="btn.name" :to="btn.path" class="button">
      <svg width="140" height="40">
        <rect class="shape" width="140" height="40"></rect>
        <text x="50%" y="50%" alignment-baseline="middle" text-anchor="middle" fill='#000000' font-size="14">{{ btn.name }}</text>
      </svg>
    </router-link>
  </div>
</template>


<script setup >
const buttons = [
  { name: '首页', path: '/' },
  { name: '登录', path: '/login' },
  { name: '注册', path: '/register' }
]
</script>


<style scoped>

/* Reset Styles */
* {
  margin: 0;
  padding: 0;
}

/* Title Styles */
.title {
  position: fixed;
  top: 20px;
  left: 70px;
  font-size: 50px;
  color: #ceadad;
  font-weight: bold;
}

/* Container Styles */
.container {
  display: flex;
  position: fixed;
  top: 0;
  right: 0; /* 注意，我已经修复了拼写错误 */
  background-color: white;
  padding: 5px;
}

/* Button Styles */
.button {
  position: relative;
  width: 140px;
  height: 40px;
  margin: 0 10px;
  cursor: pointer;
}

/* Shape Styles */
.shape {
  fill: none;
  stroke: #009ffd;
  stroke-width: 5;
  stroke-dasharray: 90 360;
  stroke-dashoffset: -200;
  transition: 1s ease;
}

/* Button Hover Styles */
.button:hover .shape {
  stroke: #06e6a0;
  stroke-width: 3;
  stroke-dasharray: 45 0;
  stroke-dashoffset: 0;
}

*{
    margin: 0;
    padding: 0;
}

body{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
}



.special-effect{
    position: relative;
    display: inline-block;
    color: #fff;
    font-size: 50px;
    text-transform: uppercase;
    letter-spacing: 8px;
    animation: wavyAnimate 1s ease-in-out infinite, animate 2.5s linear infinite;
    filter: blur(2px);
}

@keyframes wavyAnimate {
    0%{
        transform: translateY(0);
    }
    20%{
        transform: translateY(-20px);
    }
    40%,100%{
        transform: translateY(0);
    }
}

@keyframes animate {
    0%,100%{
        color: #fff;
        filter: blur(2px);
        text-shadow: 
        0 0 10px #ee7bc8,
        0 0 20px #ee7bc8,
        0 0 30px #ee7bc8,
        0 0 40px #ee7bc8,
        0 0 100px #ee7bc8,
        0 0 200px #ee7bc8,
        0 0 300px #ee7bc8,
        0 0 400px #ee7bc8;
    }
    5%,95%{
        color: #9ec4e5;
        filter: blur(0px);
        text-shadow: none;
    }
}

.special-effect:nth-child(1){
    animation-delay: 0s;
}

.special-effect:nth-child(2){
    animation-delay: 0.25s;
}

.special-effect:nth-child(3){
    animation-delay: 0.5s;
}

.special-effect:nth-child(4){
    animation-delay: 0.75s;
}

.special-effect:nth-child(5){
    animation-delay: 1s;
}


  


</style>
