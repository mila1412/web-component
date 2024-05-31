<script setup>
import { ref } from 'vue'

const count = ref(0)
const addCount = () => {
  count.value = count.value + 1
}
</script>

<template>
  <div class="container">
    <span class="title">Web Component：</span>
    <span>計數: {{ count }}</span>
    <button @click="addCount">ADD</button>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  background: #ffffff;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 8px 16px 0 rgba(37, 43, 58, 0.16);
  width: 180px;
  gap: 16px;
}

.container .title {
  font-weight: bold;
}
</style>
