<template>  
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoFooterVue from './components/TodoFooter.vue'
import TodoHeaderVue from './components/TodoHeader.vue'
import TodoInputVue from './components/TodoInput.vue'
import TodoListVue from './components/TodoList.vue'

export default {
  name: 'app',
  components: {
    'TodoHeader': TodoHeaderVue,
    'TodoInput': TodoInputVue,
    'TodoList': TodoListVue,
    'TodoFooter': TodoFooterVue
  }
}
</script>

<style>
body {
   text-align: center;
   background-color: #f6f6f8;
 }
 input {
   border-style: groove;
   width: 200px;
 }
 button {
   border-style: groove;
 }
 .shadow {
   box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
 }
</style>