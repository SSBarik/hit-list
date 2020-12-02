import React from 'react';
import Todo from './Todo';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TodoList( { todos, editTodo, toggleTodo, removeTodo } ) {
  const classes = useStyles();
  if(todos.length)
    return (
      <Paper>
        <List className={classes.root}>
          { todos.map((todo, i) => (
              <>
                <Todo 
                  {...todo}
                  key={todo.id}
                  editTodo={editTodo}
                  toggleTodo={toggleTodo}
                  removeTodo={removeTodo}
                />
                {i < todos.length -1 && <Divider />}
              </>
          ))}
        </List>
      </Paper>
    );
  return null;
}
