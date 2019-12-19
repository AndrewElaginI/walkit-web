import React from 'react';

import { Button } from '@material-ui/core';

import { useStyles } from './styles';

export default function FormButton() {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant='contained'
        color='primary'
        type='submit'
        className={classes.margin}
      >
        Login
      </Button>
    </div>
  );
}
