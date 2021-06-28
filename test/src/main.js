import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");


// 이 파일은 애플리케이션의 진입점
// Vue 앱을 초기화 하고 index.html 파일에서 어떤 html 엘리먼트를 앱에 붙여야 하는지 나타낸다.
// 이 파일에는 전역 컴포넌트나 부가적인 Vue 라이브러리를 등록하는 경우가 많다.