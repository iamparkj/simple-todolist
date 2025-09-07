// check if add button pressed
const addButton = document.getElementById("add-button");

// get HTML elements
const todoInput = document.getElementById("todo-input") as HTMLInputElement;
const todoList = document.getElementById("todo-list") as HTMLUListElement;
const totalCount = document.getElementById("total-count") as HTMLSpanElement;
const doneCount = document.getElementById("done-count") as HTMLSpanElement;

// update todo counts
function updateCounts() {
  const totalTodos = todoList.querySelectorAll("li").length;
  const doneTodos = todoList.querySelectorAll(
    "input[type='checkbox']:checked"
  ).length;
  totalCount.textContent = totalTodos.toString();
  doneCount.textContent = doneTodos.toString();
}

// delete a todo item
function deleteTodo(todoItem: HTMLLIElement) {
  todoList.removeChild(todoItem);
  updateCounts();
}

// toggle a todo item
function toggleTodo() {
  updateCounts();
}

// create a todo item
function createTodoItem(todoText: string) {
  const todoItem = document.createElement("li");
  
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", toggleTodo);

  const textSpan = document.createElement("span");
  textSpan.textContent = todoText;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "삭제";
  deleteButton.addEventListener("click", () => deleteTodo(todoItem));

  todoItem.appendChild(checkbox);
  todoItem.appendChild(textSpan);
  todoItem.appendChild(deleteButton);

  return todoItem;
}

// add element to list
const addTodo = () => {
  const todoText = todoInput.value.trim();

  if (todoText !== "") {
    const newTodo = createTodoItem(todoText);
    todoList.appendChild(newTodo);
    // todoInput.value = "";
    updateCounts();
  } else {
    alert("유효한 문자를 입력해 주세요.");
  }

  todoInput.value = "";
}

addButton?.addEventListener("click", addTodo);
