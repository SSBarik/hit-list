import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default intitialTodos => {
  const [todos, setTodos] = useState(intitialTodos);

  return {
    todos,
    addTodo: newTodoTask => {
      setTodos([...todos, {id: uuidv4(), task: newTodoTask, completed: false}]);
    },
    toggleTodo: (todoId) => {
      const updatedTodos = todos.map((todo) => 
        todo.id === todoId ? {...todo, completed: !todo.completed } : todo
      );
      setTodos(updatedTodos);
    },
    removeTodo: (todoId) => {
      const updatedTodos = todos.filter((todo) => todo.id !== todoId);
      setTodos(updatedTodos);
    },
    editTodo: (todoId, newTask) => {
      const updatedTodos = todos.map((todo) => 
        todo.id === todoId ? {...todo, task: newTask } : todo
      );
      setTodos(updatedTodos);
    }
  }
 };