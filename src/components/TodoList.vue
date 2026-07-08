<template>
  <ul v-if="todos.length > 0" class="todo-list">
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @toggle="$emit('toggle', $event)"
      @remove="$emit('remove', $event)"
    />
  </ul>

  <p v-else class="todo-list__empty">Список пуст. Добавьте первую задачу!</p>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
  name: 'TodoList',

  components: {
    TodoItem
  },

  props: {
    todos: {
      type: Array,
      required: true
    }
  },

  emits: ['toggle', 'remove']
}
</script>

<style scoped>
.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.todo-list__empty {
  text-align: center;
  color: #999;
}
</style>
