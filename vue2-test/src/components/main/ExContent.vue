<template>
  <div id="content">
    <main id="center" class="column">
      <router-view />
    </main>
    <navigaion></navigaion>
  </div>
</template>

<script>
import Navigaion from '../Navigaion.vue';
export default {
  components: { Navigaion },
  name: 'content',
  comments: {},
};
</script>

<style>
#content {
  min-height: 800px;
  height: 100%;
  padding-left: 200px;
  overflow: hidden;
}

#center {
  padding: 10px 20px;
  width: 100%;
  text-align: left;
}

#content .column {
  position: relative;
  float: left;
  padding-bottom: 1001em;
  margin-bottom: -1000em;
  padding-top: 1em;
}
</style>
