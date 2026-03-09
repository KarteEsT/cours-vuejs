<script setup lang="js">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <h1>Projects</h1>
    <nav>
      <RouterLink to="/">List</RouterLink>
      <RouterLink to="/new">Create</RouterLink>
    </nav>
  </header>
</template>

<style lang="css" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #aaa;
  padding-bottom: 20px;
  margin-bottom: 50px;
}

h1 {
  margin: 0;
}

nav {
  display: flex;
  gap: 1rem;
}

nav a {
  text-decoration: underline;
  color: inherit;
}

nav a:hover {
  color: #42b983;
  text-decoration: none;
}
</style>
