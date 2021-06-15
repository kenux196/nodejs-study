Vue.component('todo-footer', {
  template: '<p>This is another global child component</p>',
});

var app = new Vue({
  el: '#app',
  data: {
    message: 'This is a parent component',
  },
  components: {
    'todo-list': {
      template: '<p>This is another local child component</p>',
    },
  },
});

var app2 = new Vue({
  el: '#app2',
  data: {
    message: app.message + ' for app2',
  },
});
