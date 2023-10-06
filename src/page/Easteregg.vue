<template>
  <sidebar></sidebar>
  <div class="shell">
    <ul class="images" :style="{ left: (index * -100) + '%' }">
      <li v-for="(img, idx) in images" :key="idx" class="img" :style="{backgroundImage: 'url(' + img + ')'}"></li>
    </ul>
    <ul class="min">
      <li v-for="(m, idx) in minButtons" :key="idx" class="m" @click="handleClick(idx)"></li>
    </ul>
    <div class="button">
      <div class="button-left" @click="handleLeftClick">&lt;</div>
      <div class="button-right" @click="handleRightClick">&gt;</div>
    </div>
  </div>
  <div class="bg"></div>
</template>


<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import sidebar from "../components/sidebar.vue";

const time = ref(null);
const index = ref(0);
const images = [
        '/1.png.png',
        '/2.png.png',
        '/3.png.png',
        '/4.png.png',
        '/5.png.png',
        '/6.png.png',
        '/7.png.png',
        '/8.png.png',
        '/9.png.png',
        '/10.png.png',
        '/11.png.png',
        '/12.png.png',
];


const minButtons = Array(12).fill(0);

const add = () => {
  index.value++;
  if (index.value >= images.length) {
    index.value = 0;
  }
  position();
};

const desc = () => {
  index.value--;
  if (index.value < 0) {
    index.value = images.length - 1;
  }
  position();
};

const position = () => {
  const imagesElement = document.querySelector('.images');
  if (imagesElement) {
    imagesElement.style.left = (index.value * -100) + "%";
  }
};

const startTimer = () => {
  time.value = setInterval(add, 3000);
};

const stopAndRestartTimer = () => {
  clearInterval(time.value);
  startTimer();
};

const handleLeftClick = () => {
  desc();
  stopAndRestartTimer();
};

const handleRightClick = () => {
  add();
  stopAndRestartTimer();
};

const handleClick = (idx) => {
  index.value = idx;
  position();
  stopAndRestartTimer();
};

onMounted(() => {
  startTimer();
});

onBeforeUnmount(() => {
  clearInterval(time.value);
});
</script>


<style scoped>
* {
  padding: 0px;
  margin: 0px;
  list-style: none;
  text-decoration: none;
}

.shell {
  width: 1200px;
  height: 700px;
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 10px 5px 50px rgba(122, 39, 39, 0.39);
}

.images {
  width: 1200%;
  height: 100%;
  display: flex;
  position: absolute;
  left: 0;
  transition: .2s;
}

.img {
  width: 8.33%;
  background-size: cover;
}

.min {
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  bottom: 40px;
  width: 50%;
  z-index: 999;
  left: 50%;
  transform: translateX(-50%);
}

.m {
  width: 15px;
  height: 15px;
  cursor: pointer;
  border-radius: 50%;
  border: solid rgba(255, 255, 255, 0.5) 5px;
  background-color: #fff;
}

.button {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  user-select: none;
}

.button-left,
.button-right {
  font-size: 50px;
  background-color: rgba(102, 123, 161, 0.288);
  padding: 0 20px;
  cursor: pointer;
  line-height: 700px;
  color: #fff;
}

.bg {
  width: 100vw;
  height: 100vh;
  z-index: -9999;
  position: absolute;
  filter: blur(12px);
  opacity: .5;
}
</style>
