<template>
  <div class="list-container">
    <p>입력한 리스트</p>
    <ul v-for="(item, index) in inputItems" :key="index">
      <li>{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    inputItems: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      items: ['a', 'b'],
    };
  },
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
