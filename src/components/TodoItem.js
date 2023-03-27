import React from "react";

const TodoItem = ({ todo, onMarkComplete, onDeleteItem }) => {
  const getStyle = () => {
    return {
      textDecoration: todo.completed ? "line-through" : "none",
      margin: "5px",
      padding: "5px",
      marginBottom: "-4px",
    };
  };

  return (
    <div style={getStyle()} className="box">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onMarkComplete(todo.id)}
      />{" "}
      {todo.task}
      <button className="add-btn" onClick={() => onDeleteItem(todo.id)}>
        X
      </button>
    </div>
  );
};

export default TodoItem;
