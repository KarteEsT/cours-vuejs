<script setup lang="js">
defineProps(['todo'])
</script>

<template>
  <li class="todo-item">
    <h3>{{ todo.title }}</h3>
    <span>{{ todo.status }}</span>
    <ul class="tags">
      <li class="tag" v-for="tag in todo.tags" :key="`${todo.title}-tag-${tag}`">{{ tag }}</li>
    </ul>
  </li>
</template>

<style lang="css" scoped>
.todo-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  padding: 16px 0;
  border-bottom: 1px solid #aaa;
}

h3 {
  flex-basis: 300px;
  overflow: hidden;
  font-size: 1.2em;
}

.tags {
  display: flex;
  flex-direction: row-reverse;
  gap: 10px;

  flex-grow: 1;
}

.tags li {
  list-style: none;
  padding: 3px 7px;

  border: 2px solid;
  border-radius: 33px;
}

.tags li:nth-child(2n) {
  border-color: cornflowerblue;
  background-color: azure;
}

.tags li:nth-child(2n + 1) {
  border-color: lightcoral;
  background-color: mistyrose;
}
</style>
