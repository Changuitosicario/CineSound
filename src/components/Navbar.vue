<template>
  <nav class="navbar">
    <div class="logo">Cinesound</div>
  </nav>
</template>

<script setup>
import { defineEmits, ref } from 'vue'

const emit = defineEmits(['search'])
const searchQuery = ref('')

function onInput() {
  emit('search', searchQuery.value)
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2e2e2e;
  padding: 15px 25px;
  color: #f2f0ec;
}
.logo {
  font-size: 1.5rem;
  font-weight: bold;
}
.search-input {
  background: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px;
  font-size: 1rem;
  width: 250px;
}
</style>
