<template>
  <div class="input-container">
    <p>입력창 (v-model)</p>
    <input type="text" v-model="newMessage" />
    <button @click="inputMessage">입력</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newMessage: '',
    };
  },
  methods: {
    inputMessage() {
      console.log('메시지 입력 = ', this.newMessage);
      this.$emit('registerMessage', this.newMessage);
    },
  },
};
</script>

<style scoped>
.input-container {
  width: 250px;
}
input {
  width: 100%;
}
</style>
