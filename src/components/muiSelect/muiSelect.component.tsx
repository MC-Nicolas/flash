import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';

type MuiSelectProps = {
  title: string;
  value: string;
  onChange: any;
  options: string[];
};

const MuiSelect = ({ title, value, onChange, options }: MuiSelectProps) => {
  return (
    <FormControl fullWidth>
      <InputLabel id='demo-simple-select-label'>{title}</InputLabel>
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={value}
        label={title}
        onChange={onChange}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MuiSelect;
