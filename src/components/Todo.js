import React, { useState } from 'react';
import useToggleState from '../hooks/useToggleState';
import EditTodoForm from './EditTodoForm';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export default function Todo( { id, task, completed, editTodo, toggleTodo, removeTodo } ) {
  const [isEditing, toggle] = useToggleState(false);

  return (
    <>
      <ListItem>
        {isEditing ? <EditTodoForm id={id} task={task} editTodo={editTodo} toggleEditForm={toggle} /> : 
          <>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={completed}
                tabIndex={-1}
                inputProps={{ 'aria-labelledby': id }}
                onClick={() => toggleTodo(id)}
              />
            </ListItemIcon>
            <ListItemText style={{ textDecoration: completed? 'line-through' : 'none' }}>{task}</ListItemText>
            {/* {console.log(todo.id, todo.task, todo.completed)} */}
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => {removeTodo(id)}}>
                <DeleteIcon />
              </IconButton>
              <IconButton edge="end" aria-label="edit" onClick={toggle}>
                <EditIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </>
        }
      </ListItem>
    </>
  );
}
