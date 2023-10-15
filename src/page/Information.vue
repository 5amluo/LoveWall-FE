<script setup>
import sidebar from "../components/sidebar.vue";
import share from "../components/share.vue";
import myself from "../components/myself.vue";
</script>


<template>
  <div v-click-effect>
 <sidebar></sidebar>
  <h1>个人信息</h1>
  <share></share>
  <myself></myself>
  </div>
</template>

<style scoped>

</style>