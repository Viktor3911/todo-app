// Создаёт объект новой задачи
export function createTodo(text) {
  return {
    id: Date.now(), // простой уникальный id для учебного проекта
    text: text.trim(),
    done: false
  }
}

// Переключает статус выполнения задачи по id
export function toggleTodo(todos, id) {
  return todos.map((todo) =>
    todo.id === id ? { ...todo, done: !todo.done } : todo
  )
}

// Удаляет задачу по id
export function removeTodo(todos, id) {
  return todos.filter((todo) => todo.id !== id)
}
