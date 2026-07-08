<template>
  <form class="todo-form" @submit.prevent="submit">
    <input
      v-model="text"
      class="todo-form__input"
      type="text"
      placeholder="Новая задача..."
    />
    <button class="todo-form__button" type="submit">Добавить</button>
  </form>
</template>

<script>
export default {
  name: 'TodoForm',

  emits: ['add'],

  data() {
    return {
      text: ''
    }
  },

  methods: {
    submit() {
      // Пустую строку не добавляем
      if (this.text.trim() === '') return

      this.$emit('add', this.text)
      this.text = ''
    }
  }
}
</script>

<style scoped>
.todo-form {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.todo-form__input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
}

.todo-form__button {
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  background: #42b883;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}

.todo-form__button:hover {
  background: #36996e;
}
</style>
