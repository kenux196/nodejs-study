<template>
  <nav id="navigation" class="column">
    <h3 class="menu-title">학습 내용</h3>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/html-css-study">HTML CSS</router-link></li>
      <li><router-link to="/vue2-basic">Vue2 Basic</router-link></li>
    </ul>
  </nav>
</template>

<script scoped>
export default {
  name: 'navigation',
};
</script>

<style>
nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

nav ul a {
  color: darkgreen;
  text-decoration: none;
}

#navigation {
  width: 180px;
  padding: 0 10px;
  right: 240px;
  margin-left: -100%;
  background: rgb(252, 251, 251);
}

.menu-title {
  color: darkolivegreen;
}
</style>
