import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';
import { TextField, TextFieldProps } from '@mui/material';

interface TextFieldControllerProps<T extends FieldValues>
  extends UseControllerProps<T> {
  placeholder: string;
  type?: TextFieldProps['type'];
  error?: boolean;
  helperText?: string;
  multiline?: boolean;
  rows?: number;
  id?: string;
}

const TextFieldController = <T extends FieldValues>({
  name,
  control,
  placeholder,
  type = 'text',
  error,
  helperText,
  multiline,
  rows,
  id,
  ...rest
}: TextFieldControllerProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          id={id || name}
          variant="outlined"
          fullWidth
          placeholder={placeholder}
          type={type}
          {...field}
          error={error}
          helperText={helperText}
          multiline={multiline}
          rows={rows}
          margin="normal"
          InputLabelProps={{ shrink: false }}
          {...rest}
        />
      )}
    />
  );
};

export default TextFieldController;
