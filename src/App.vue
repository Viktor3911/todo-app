<template>
  <div class="app">
    <h1 class="app__title">Todo List</h1>

    <TodoForm @add="addTodo" />

    <TodoList :todos="todos" @toggle="toggleTodo" @remove="removeTodo" />
  </div>
</template>

<script>
import TodoForm from './components/TodoForm.vue'
import TodoList from './components/TodoList.vue'
import { createTodo, toggleTodo, removeTodo } from './services/todoService.js'

export default {
  name: 'App',

  components: {
    TodoForm,
    TodoList
  },

  data() {
    return {
      todos: []
    }
  },

  methods: {
    addTodo(text) {
      this.todos = [...this.todos, createTodo(text)]
    },

    toggleTodo(id) {
      this.todos = toggleTodo(this.todos, id)
    },

    removeTodo(id) {
      this.todos = removeTodo(this.todos, id)
    }
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: #f5f5f5;
}
</style>

<style scoped>
.app {
  max-width: 480px;
  margin: 40px auto;
  padding: 24px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.app__title {
  margin-top: 0;
  text-align: center;
  color: #2c3e50;
}
</style>
