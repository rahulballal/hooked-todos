import React, { createContext, useState } from "react";


const addTodo = (newTodo, todoList) => [...todoList, newTodo];

const updateTodo = (idx, updatedTodo, todoList) => {
    const copy = [...todoList];
    copy[idx] = updatedTodo;
    return copy;
};
const deleteTodo = (idx, todoList) => {
    const copy = [...todoList];
    copy.splice(idx, 1);
    return copy;
};

export const TodosContext = createContext();

export const TodosProvider = props => {
  const [todoList, setTodos] = useState(props.todoList || []);

  const ctxValue = {
    todoList,
    setTodos,
    addTodo,
    updateTodo,
    deleteTodo
  };

  return (
    <TodosContext.Provider value={ctxValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

TodosProvider.defaultProps = {
    todoList: []
}
