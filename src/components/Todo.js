import TodoItem from "./TodoItem";
import React from "react";

export default function Todo({ todos, onMarkComplete, onDeleteItem }) {
  // const onMarkComplete = (todo) => {
  //     console.log(todo);
  // }

  // arr.reduce((acc, curr) => {
  //     !acc[curr[userId]] ? acc[curr[userId]] = [curr] : acc[curr[userId]].push(curr);
  //     return acc;
  // }, {})

  return (
    <div className="items">
      {todos.map((item, index) => (
        <TodoItem
          key={`todo-${index}`}
          todo={item}
          onMarkComplete={onMarkComplete}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </div>
  );
}
