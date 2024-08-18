import React from 'react';
import {
  Select,
  MenuItem,
  FormControl,
  SelectChangeEvent,
  InputAdornment,
} from '@mui/material';

interface SelectControllerProps {
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  options: string[];
  defaultValue?: string;
  placeholder?: string;
  icon?: React.ReactNode;
}

const SelectController = ({
  value,
  onChange,
  options,
  defaultValue,
  placeholder,
  icon,
}: SelectControllerProps) => {
  const isValueSelected = !!value || !!defaultValue;

  return (
    <FormControl fullWidth>
      <Select
        value={value || defaultValue || ''}
        onChange={onChange}
        displayEmpty
        renderValue={(selected) => {
          if (selected === '') {
            return <>{placeholder || 'Select an option'}</>;
          }
          return <>{selected}</>;
        }}
        startAdornment={
          icon ? <InputAdornment position="start">{icon}</InputAdornment> : null
        }
        sx={{
          opacity: isValueSelected ? 1 : 0.6,
        }}
      >
        <MenuItem value="" disabled>
          {placeholder || 'Select an option'}
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectController;
