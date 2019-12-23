import React from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { useStyles } from './styles';

export default function UserTypeSelect({ value, handleChange, options = [] }) {
  const classes = useStyles();
  const menuItemsList = options.map(option => {
    return <MenuItem value={option}>{option}</MenuItem>;
  });
  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={value}
          onChange={handleChange}
        >
          {menuItemsList}
          {/* <MenuItem value='all'>all</MenuItem>
          <MenuItem value='employee'>employee</MenuItem>
          <MenuItem value='manager'>manager</MenuItem> */}
        </Select>
        <FormHelperText className={classes.helperText}>
          User Type
        </FormHelperText>
      </FormControl>
    </div>
  );
}
