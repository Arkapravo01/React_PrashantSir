import React from "react";
import Appname from "./Components/Appname";
import AddTodo from "./Components/AddTodo";
import TodoItem from "./Components/TodoItem";
import "./App.css";
import TodoItems from "./Components/TodoItems";

function App() {
  let todoName = "Buy Milk";
  let todoDate = "4/10/23";

  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/23",
    },
    {
      name: "Go to College",
      dueDate: "4/10/23",
    },
    {
      name: "Like this video",
      dueDate: "Right Now",
    },
    {
      name: 'Dynamic Done',
      dueDate:'5pm/15-March/2025'
    }
  ];
  return (
    <center className="todo-container">
      <Appname />
      <AddTodo />
      <TodoItems arr={todoItems} />
    </center>
  );
}

export default App;
