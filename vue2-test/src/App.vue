<template>
  <div id="app">
    <ex-header></ex-header>
    <ex-content></ex-content>
    <ex-footer></ex-footer>
  </div>
</template>
<script>
import ExContent from './components/main/ExContent.vue';
import ExFooter from './components/main/ExFooter.vue';
import ExHeader from './components/main/ExHeader.vue';
// import Navigaion from "./components/Navigaion.vue";
export default {
  components: { ExHeader, ExFooter, ExContent },
};
</script>
, Navigaion
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* Layout */
body {
  min-width: 630px;
}

/* Fix for the footer */
* html body {
  overflow: hidden;
}

/* Aesthetics */
body {
  margin: 0;
  padding: 0;
  font-family: Sans-serif;
  line-height: 1.5em;
}
</style>
