// массив с задачами (состояние приложения)
export const todos = [];

// функции для работы с состоянием приложения

// добавление новой задачи
export function addTodo(todo) {
  todos.push(todo);
}

// выполнение задачи или отмена выполнения
export function toggleCompleteTodo(todoId, checked) {
  const todo = todos.find((todo) => todo.id === todoId);
  todo.completed = checked;
}
