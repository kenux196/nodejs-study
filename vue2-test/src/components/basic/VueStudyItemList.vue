<template>
  <div class="list-container">
    <p>{{ title }}</p>
    <ul v-for="(item, index) in propsdata" :key="index">
      <li>{{ item }}</li>
    </ul>
    <p>{{ subtitle }}</p>
  </div>
</template>

<script>
export default {
  props: ['propsdata', 'title', 'subtitle'],
};
</script>

<style scoped>
.list-container {
  width: 200px;
  margin-left: 20px;
}
ul {
  list-style-type: none;
}
</style>
