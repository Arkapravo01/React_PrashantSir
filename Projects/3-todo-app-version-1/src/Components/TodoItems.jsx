import React from "react";
import TodoItem from "./TodoItem";

const TodoItems = (props) => {
  return (
    <div>
      <div className="items-container">
        {/* Pass todoName and todoDate as separate props */}
        {props.arr.map((item,idx) => (
          <TodoItem key={idx} todoName={item.name} todoDate={item.dueDate} />
        ))}
      </div>
    </div>
  );
};

export default TodoItems;
