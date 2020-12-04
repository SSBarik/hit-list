import React, { useContext } from 'react';
import useInputState from '../hooks/useInputState';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { DispatchContext } from '../context/todos.context';

export default function EditTodoForm( { id, task, toggleEditForm } ) {
  const [value, handleChange, reset] = useInputState(task);
  const dispatch = useContext(DispatchContext);

  return (
    <form 
      noValidate 
      autoComplete="off" 
      onSubmit={ (e) => {
        dispatch({ type: "EDIT", id: id, newTask: value})
        reset(); 
        e.preventDefault();
        toggleEditForm();
      }}
      width="100%"
    >
      <TextField value={ value } onChange={ handleChange } autoFocus fullWidth />
    </form>
  );
}
