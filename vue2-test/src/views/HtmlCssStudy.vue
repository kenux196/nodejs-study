<template>
  <div id="htmltest">
    <div id="title">
      <h1>HTML CSS 학습 공간</h1>
    </div>
    <div class="red">클래스 테스트</div>
    <div class="blue">클래스 테스트</div>
    <div class="blue red">클래스 테스트</div>
    <div class="red blue large-bold-text">클래스 테스트</div>
    <div class="red bg-yellow large-bold-text">클래스 테스트</div>
    <ul class="list-title large-bold-text">
      My family
      <li class="nameloop" v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: ['윤지원', '윤아준', '윤상규'],
    };
  },
};
</script>

<style scoped>
h1 {
  height: 50px;
  background-color: wheat;
  text-align: center;
  margin: auto;
}

div {
  background-color: green;
}

#htmltest {
  text-align: start;
  height: 340px;
}

.red {
  color: red;
}

.blue {
  color: blue;
}

.bg-yellow {
  background-color: yellow;
}

.large-bold-text {
  font-size: large;
  font-weight: bold;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

.list-title {
  background-color: #434343;
  color: white;
}

.nameloop {
  color: lightblue;
  padding-left: 5px;
}
</style>
