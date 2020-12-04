import React, { useContext, memo } from 'react';
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
import { DispatchContext } from '../context/todos.context';

function Todo( { id, task, completed } ) {
  const [isEditing, toggle] = useToggleState(false);
  const dispatch = useContext(DispatchContext);

  return (
    <>
      <ListItem>
        {isEditing ? <EditTodoForm id={id} task={task} toggleEditForm={toggle} /> : 
          <>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={completed}
                tabIndex={-1}
                inputProps={{ 'aria-labelledby': id }}
                onClick={() => dispatch({ type: "TOGGLE", id: id})}
              />
            </ListItemIcon>
            <ListItemText style={{ textDecoration: completed? 'line-through' : 'none' }}>{task}</ListItemText>
            {/* {console.log(todo.id, todo.task, todo.completed)} */}
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => dispatch({ type: "REMOVE", id: id})}>
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

export default memo(Todo);