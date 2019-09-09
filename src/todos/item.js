import React, { useState, useContext } from "react";
import { TodosContext } from "../todos-provider";

export function AddTodo() {
  const { addTodo, setTodos } = useContext(TodosContext);

  const [newTodo, setTodo] = useState("");

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={({ target: { value } }) => setTodo(value)}
      />
      <button
        onClick={() => {
          setTodos(oldTodos => {
            return addTodo(newTodo, oldTodos);
          });
        }}
      >
        Add
      </button>
    </div>
  );
}

export default function Todo({ item, onDelete }) {
  return <p onClick={onDelete}>{item}</p>;
}
