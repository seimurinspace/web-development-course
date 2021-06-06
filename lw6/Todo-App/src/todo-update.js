// функция обновления UI, принимает текущее состояние приложения (список todo)
export function updateTodoList(todos) {
  const todoList = document.querySelector(".todo-list");
  todos.forEach((todo) => {
    if (
      document.querySelector(`.todo-list-item input[name="todo-${todo.id}"]`)
    ) {
      return;
    }

    todoList.insertAdjacentHTML(
      "beforeEnd",
      `
      <div class="todo-list-item">
        <label>
          <input type="checkbox" class="todo-list-item__checkbox" name="todo-${todo.id}" />
          ${todo.text}
        </label>
      </div>
    `
    );
  });
}

// функция обновления UI в блоке "Выполнено задач: 0"
export function updateTodoStatCompleted(todos) {
  const statCompletedCount = document.querySelector(
    ".todo-list-stat__completed"
  );
  const completedTodos = todos.filter((todo) => todo.completed);
  statCompletedCount.textContent = completedTodos.length;
}
