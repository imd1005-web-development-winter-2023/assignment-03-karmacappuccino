//
//  JS File
//  You may remove the code below - it's just boilerplate
//
const todos = [

];


const todoList = document.querySelector(".todo-list");
const form = document.querySelector(".add-todo-form");
const toDoInputBox = document.querySelector("#todo-name");
const clearAllButton = document.querySelector(".clear-all");

todoList.classList.add("className");

console.log(todoList);


function getList() {
  // Clear all of the entries in the list
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }

  for (let i = 0; i < todos.length; i++) {
    const todoListItem = document.createElement("li");
    todoListItem.textContent = todos[i].text + " " + todos[i].isDone;

    const todoListButton = document.createElement("button");
    todoListButton.innerHTML = '<img src= images/trash.png width= 20px> ';

    todoListButton.style.backgroundColor = '#FFCCCB';

    todoListButton.style.cursor = "pointer";

    todoListButton.dataset.index = i;

    todoListItem.appendChild(todoListButton);

    todoList.appendChild(todoListItem);
  }
}

function addTodoItem(event) {
  event.preventDefault();

  const newTodo = toDoInputBox.value;

  todos.push({
    text: newTodo,
    isDone: false,
  });

  console.log("I AM A FUNCTION", newTodo);

  console.log(todos);

  getList();
}

function handleButtonClickInsideUl(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }

  todoArrayIndexToClear = event.target.dataset.index;

  todos.splice(todoArrayIndexToClear, 1);

  console.log(todos);

  getList();
}

form.addEventListener("submit", addTodoItem);
todoList.addEventListener("click", handleButtonClickInsideUl);

getList();

function clearAllTodos(event) {
  todos.length = 0;

  getList();
}

clearAllButton.addEventListener("click", clearAllTodos);
