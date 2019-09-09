import React, { useContext } from "react";
import { TodosContext } from "../todos-provider";
import Todo from "./item";

export default function TodoList() {
  const { todoList, deleteTodo, setTodos } = useContext(TodosContext);

  return (
    <div>
      <ul>
        {todoList.map((todo, idx) => (
          <li>
            <Todo
              item={todo}
              onDelete={() => {
                setTodos(oldTodos => {
                  return deleteTodo(idx, oldTodos);
                });
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
