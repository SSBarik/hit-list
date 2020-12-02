import React, { useState } from 'react';
import useInputState from '../hooks/useInputState';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export default function EditTodoForm( { id, task, editTodo, toggleEditForm } ) {
  const [value, handleChange, reset] = useInputState(task);

  return (
    <form 
      noValidate 
      autoComplete="off" 
      onSubmit={ (e) => {
        editTodo(id, value);
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
