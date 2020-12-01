import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop: 10
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const [todos, setTodos] = useState([]);
  console.log(todos)

  return (
    <div className={classes.root}>
      <Grid container  justify="center" spacing={0}>
        <Grid item xs={11} sm={6}>
          <Paper className={classes.paper}>
            <TodoForm todos={todos} setTodos={setTodos} />
          </Paper>
          <Paper className={classes.paper}>
            <TodoList todos={todos} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
