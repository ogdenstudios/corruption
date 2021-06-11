<template>
  <div>
    <button type="button" @click="state.count--">-1</button>
    <p>Count: {{ state.count - 50 }}</p>
    <button type="button" @click="state.count++">+1</button>
  </div>
</template>

<script setup>
import { defineProps, reactive } from "vue";

const state = reactive({ count: 0 });
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
