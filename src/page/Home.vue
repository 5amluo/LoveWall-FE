<template>
   <div v-click-effect>
  <div class="confession-wall">
    <img src="/6cf2db8fece33bd3bf7a54638f065af.jpg" alt="橙汁" class="my-image" />
    <h1 class="title">心动频率局</h1>
    <p class="description">一个简单的表白墙网站项目，提供一个平台让人们可以表达他们的爱意和好感。</p>

    <div class="modules">

      <div class="module" v-for="module in modules" :key="module.id">
        <h2>{{ module.title }}</h2>
        <p>{{ module.content }}</p>
      </div>

    </div>

  </div>
   </div>
</template>

<script setup>

import { ref } from 'vue';

const modules = ref([
  { id: 1, title: '极简', content: '我们追求简单，自由，尝试用户自适应' },
  { id: 2, title: '开放', content: '我们将开源此网站，欢迎大家前来交流' },
  { id: 3, title: '纯净', content: '我们控制了使用人群，保证了用户体验' },
]);

</script>


<style scoped>
.my-image {
  width: 100px;
}

.confession-wall {
  text-align: center;
  padding: 20px;
}


.title {
  font-size: 2rem;
  margin-top: 20px;
}

.description {
  margin-top: 10px;
  color: #555;
}

.modules {
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
}

.module {
  width: 200px;
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
</style>
