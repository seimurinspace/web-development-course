// todo-app - точка входа в приложение
// регистрируем события

import { addTodo, todos, toggleCompleteTodo } from "./todo-state";
import { updateTodoList, updateTodoStatCompleted } from "./todo-update";

// событие добавление новой задачи в TODO
const addTodoButton = document.querySelector(".todo-form__button");

addTodoButton.onclick = function () {
  const newTodoText = document.querySelector(".todo-form__input").value;
  const todoId = todos.length + 1;

  // добавляем новый элемент в состояние
  addTodo({
    id: todoId,
    text: newTodoText,
    completed: false
  });

  // обновляем UI с новым состоянием todos
  updateTodoList(todos);

  registerTodoItemEvent(todoId);
};

// регистрация событий для чекбоксов

function registerTodoItemEvent(todoId) {
  const todoItemCheckbox = document.querySelector(
    `.todo-list-item input[name="todo-${todoId}"]`
  );
  todoItemCheckbox.onclick = function () {
    // связываем чекбокс и логику изменения данных состояния
    toggleCompleteTodo(todoId, todoItemCheckbox.checked);

    // вызываем обновление количества выполненных задач
    updateTodoStatCompleted(todos);
  };
}
