//
//  JS File
//

//
// Constants
// 

//constant todos that display when opening web page

const todos = [
  {
    text: "Pace around room (24/7)",
    isDone: true,
  },

  {
    text: "Cry at 12AM",
    isDone: true,
  },

  {
    text: "Lisen to Portals on March 31st 3AM EST",
    isDone: true,
  }
];

const todoList = document.querySelector(".todo-list"); //todo list
const form = document.querySelector(".add-todo-form"); //html form 
const todoInput = document.querySelector("#todo-name"); // todo input
const clearAllButton = document.querySelector(".clear-all"); //to clear all todo inputs

todoList.classList.add("className");

console.log(todoList);

//
// Functions
//

function getList() {
  //adds the new tasks and prints them
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }

  for (let i = 0; i < todos.length; i++) {
    const yourTodo = document.createElement("li");
    yourTodo.textContent = todos[i].text + " " + todos[i].isDone;

    //clear button for todo
    const todoListButton = document.createElement("button");
    todoListButton.innerHTML = '<img src= images/trash.png width= 20px> ';

    todoListButton.style.backgroundColor = '#FFCCCB';

    todoListButton.style.cursor = "pointer";

    todoListButton.dataset.index = i;

    yourTodo.appendChild(todoListButton);

    todoList.appendChild(yourTodo);
  }
}

//add a new todo by user
function addTodo(event) {
  event.preventDefault();

  const newTodo = todoInput.value;

  todos.push({
    text: newTodo,
    isDone: true,
  });

  console.log("todo", newTodo);

  console.log(todos);

  getList(true);
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

form.addEventListener("submit", addTodo);
todoList.addEventListener("click", handleButtonClickInsideUl);

getList();

function clearAllTodos(event) {
  todos.length = 0;

  getList();
}

clearAllButton.addEventListener("click", clearAllTodos);
