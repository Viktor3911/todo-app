<template>
  <li class="todo-item">
    <label class="todo-item__label">
      <input
        type="checkbox"
        :checked="todo.done"
        @change="$emit('toggle', todo.id)"
      />
      <span class="todo-item__text" :class="{ done: todo.done }">
        {{ todo.text }}
      </span>
    </label>

    <button
      class="todo-item__remove"
      type="button"
      @click="$emit('remove', todo.id)"
    >
      Удалить
    </button>
  </li>
</template>

<script>
export default {
  name: 'TodoItem',

  props: {
    todo: {
      type: Object,
      required: true
    }
  },

  emits: ['toggle', 'remove']
}
</script>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 10px 12px;
  border: 1px solid #eee;
  border-radius: 6px;
  margin-bottom: 8px;
}

.todo-item__label {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.todo-item__text {
  font-size: 16px;
}

/* Зачёркивание выполненной задачи */
.todo-item__text.done {
  text-decoration: line-through;
  color: #999;
}

.todo-item__remove {
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  background: #e74c3c;
  color: #fff;
  cursor: pointer;
}

.todo-item__remove:hover {
  background: #c0392b;
}
</style>
