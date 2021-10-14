<template>
  <div class="date-selector-container">
    <input type="date" value="2021-10-05" />
    <br />
    <span>{{ today }}, {{ getWeek }}</span>
  </div>
</template>

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/locale/ko.js"></script>
<script>
export default {
  data() {
    return {
      today: this.getToday(),
    };
  },
  computed: {
    getWeek() {
      var d = new Date();
      var week = new Array('일', '월', '화', '수', '목', '금', '토');
      return week[d.getDay()] + '요일';
    },
    getFormmattedToday() {
      // return moment().format('L');
      return getToday();
    },
  },
  methods: {
    getToday() {
      return new Date().toLocaleDateString();
    },
  },
};
</script>

<style></style>
