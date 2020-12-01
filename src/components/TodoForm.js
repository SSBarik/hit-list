import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0),
      width: '100%'
    },
  },
}));

export default function BasicTextFields( { todos, setTodos } ) {
  const classes = useStyles();
  const [input, setInput] = useState("");
  
  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    if(input) {
      setTodos([...todos, input]);
    }
    setInput("");
    e.preventDefault();
  };

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={ handleSubmit }>
      <TextField id="standard-basic" label="Add item" variant="outlined" value={ input } onChange={ handleChange } />
    </form>
  );
}
