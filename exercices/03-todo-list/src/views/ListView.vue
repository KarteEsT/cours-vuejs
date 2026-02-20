<template>
  <h2>List</h2>

  <ul>
    <li>
      <h3>Apprendre le VueJS</h3>
      <span>In progress</span>
    </li>
    <li>
      <h3>Apprendre le ReactJS</h3>
      <span>Todo</span>
    </li>
    <li>
      <h3>Apprendre l'Angular</h3>
      <span>Won't do</span>
    </li>
    <li>
      <h3>Devenir le maître du monde</h3>
      <span>Done</span>
    </li>
  </ul>
</template>

<style lang="css" scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0 20px;
}

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
