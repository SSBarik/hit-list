import React, { useEffect } from 'react';
import useTodoState from '../hooks/useTodoState';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 50
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop: 10,
    marginBottom: 10
  },
}));

export default function TodoApp() {
  const classes = useStyles();
  const initialTodos = [{id: 1, task: "Yo Yo Yo", completed: false}];
  const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(initialTodos);

  
  return (
    <div className={classes.root}>
      <Grid container  justify="center" spacing={0}>
        <Grid item xs={11} sm={6}>
          <Paper className={classes.paper}>
            <TodoForm addTodo={addTodo} />
          </Paper>
          <TodoList todos={todos} editTodo={editTodo} toggleTodo={toggleTodo} removeTodo={removeTodo} />
        </Grid>
      </Grid>
    </div>
  );
}
