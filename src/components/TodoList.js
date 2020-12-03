import React, { useContext } from 'react';
import Todo from './Todo';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import { TodosContext } from '../context/todos.context';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TodoList() {
  const classes = useStyles();
  const { todos } = useContext(TodosContext);

  if(todos.length)
    return (
      <Paper>
        <List className={classes.root}>
          { todos.map((todo, i) => (
            <React.Fragment key={i}>
              <Todo {...todo} key={todo.id} />
              {i < todos.length -1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    );
  return null;
}
