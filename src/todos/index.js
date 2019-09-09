import React from "react";
import TodoList from "./list";
import { AddTodo } from "./item";

export default function Todos() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      <AddTodo />
      <TodoList />
    </div>
  );
}
