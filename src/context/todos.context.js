import React, { createContext, useReducer } from 'react';
import useTodoState from '../hooks/useTodoState';
import todoReducers from '../reducers/todo.reducers';

const defaultTodos = [
  { id: 1, task: "Everybody", completed: false},
  { id: 2, task: "Nobody", completed: true}
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const todoStuff = useTodoState(defaultTodos);
  const [todos, dispatch] = useReducer(todoReducers, defaultTodos);

  return(
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        { props.children }
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}