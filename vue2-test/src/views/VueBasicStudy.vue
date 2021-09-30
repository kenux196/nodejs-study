<template>
  <div>
    <h4>Vue2 기본 학습</h4>
    <div class="study-container">
      <vue-study-input></vue-study-input>
      <vue-study-item-list></vue-study-item-list>
    </div>
  </div>
</template>

<script>
import VueStudyInput from '../components/basic/VueStudyInput.vue';
import VueStudyItemList from '../components/basic/VueStudyItemList.vue';
export default {
  components: { VueStudyInput, VueStudyItemList },
  data() {
    return {
      inputItems: ['test1', 'test2'],
    };
  },
};
</script>

<style scoped>
div {
  float: left;
}
</style>
