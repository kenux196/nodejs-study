<template>
  <div>
    <h4>Vue2 기본 학습</h4>
    <div class="study-container">
      <vue-study-input v-on:registerMessage="saveMessage"></vue-study-input>
      <vue-study-item-list :propsdata="inputItems" title="정적 데이터 전달" :subtitle="subtitle"></vue-study-item-list>
    </div>
    <div>
      <today-selector></today-selector>
      <br />
      <wake-up-sleep-time></wake-up-sleep-time>
    </div>
  </div>
</template>

<script>
import TodaySelector from '../components/basic/TodaySelector.vue';
import VueStudyInput from '../components/basic/VueStudyInput.vue';
import VueStudyItemList from '../components/basic/VueStudyItemList.vue';
import WakeUpSleepTime from '../components/basic/WakeUpSleepTime.vue';
export default {
  components: { VueStudyInput, VueStudyItemList, WakeUpSleepTime, TodaySelector },
  data() {
    return {
      inputItems: ['test1', 'test2'],
      subtitle: '동적 데이터 전달...',
    };
  },
  methods: {
    saveMessage(message) {
      this.inputItems.push(message);
    },
  },
};
</script>

<style scoped>
div {
  float: left;
}
</style>
