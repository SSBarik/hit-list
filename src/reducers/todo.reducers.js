import { v4 as uuidv4 } from 'uuid';

const todoReducers = (state, action) => {
  switch(action.type) {
    case "ADD":
      return [...state, {id: uuidv4(), task: action.task, completed: false}];
    case "REMOVE": 
      return state.filter((todo) => todo.id !== action.id);
    case "TOGGLE":
      return state.map((todo) => 
        todo.id === action.id ? {...todo, completed: !todo.completed } : todo
      );
    case "EDIT":
      return state.map((todo) => 
        todo.id === action.id ? {...todo, task: action.newTask } : todo
      );
    default: 
      return state;
  }
}

export default todoReducers;

// todos,
// addTodo: newTodoTask => {
//   setTodos([...todos, {id: uuidv4(), task: newTodoTask, completed: false}]);
// },
// toggleTodo: (todoId) => {
//   const updatedTodos = todos.map((todo) => 
//     todo.id === todoId ? {...todo, completed: !todo.completed } : todo
//   );
//   setTodos(updatedTodos);
// },
// removeTodo: (todoId) => {
//   const updatedTodos = todos.filter((todo) => todo.id !== todoId);
//   setTodos(updatedTodos);
// },
// editTodo: (todoId, newTask) => {
//   const updatedTodos = todos.map((todo) => 
//     todo.id === todoId ? {...todo, task: newTask } : todo
//   );
//   setTodos(updatedTodos);
// }