import React, { useContext } from 'react';
import useInputState from '../hooks/useInputState';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { TodosContext } from '../context/todos.context';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0),
      width: '100%'
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();
  const [value, handleChange, reset] = useInputState("");
  const { addTodo } = useContext(TodosContext);

  return (
    <form 
      className={classes.root} 
      noValidate 
      autoComplete="off" 
      onSubmit={e => {
        e.preventDefault();
        addTodo(value);
        reset();
      }}
    >
      <TextField 
        label="Who's next?" 
        variant="outlined" 
        value={ value } 
        onChange={ handleChange } 
      />
    </form>
  );
}
