<script setup lang="js">
defineProps(['todo'])
</script>

<template>
  <li>
    <h3>{{ todo.title }}</h3>
    <span>{{ todo.status }}</span>
  </li>
</template>

<style lang="css" scoped>
li {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  padding: 10px;
  border-bottom: 1px solid #aaa;
}

h3 {
  width: 300px;
  overflow: hidden;
}
</style>
