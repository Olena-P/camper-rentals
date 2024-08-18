import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';
import { TextField, InputAdornment, FormControl } from '@mui/material';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';
import {
  StyledDatePickerWrapper,
  HeaderDate,
  HeaderButton,
  CustomHeader,
} from './DatePickerController.styled';
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';

interface DatePickerControllerProps<T extends FieldValues>
  extends UseControllerProps<T> {
  placeholder: string;
  error?: boolean;
  helperText?: string;
  id?: string;
}

const DatePickerController = <T extends FieldValues>({
  name,
  control,
  placeholder,
  error,
  helperText,
  id,
  ...rest
}: DatePickerControllerProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <FormControl fullWidth error={error} {...rest}>
          <StyledDatePickerWrapper>
            <DatePicker
              selected={value ? new Date(value) : null}
              onChange={(date: Date | null) =>
                onChange(date ? format(date, 'yyyy-MM-dd') : '')
              }
              onBlur={onBlur}
              dateFormat="yyyy-MM-dd"
              locale={enUS}
              placeholderText={placeholder}
              renderCustomHeader={({
                date,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled,
              }) => (
                <CustomHeader>
                  <HeaderButton
                    onClick={decreaseMonth}
                    disabled={prevMonthButtonDisabled}
                  >
                    <NavigateBeforeRoundedIcon />
                  </HeaderButton>
                  <HeaderDate>{format(date, 'MMMM yyyy')}</HeaderDate>
                  <HeaderButton
                    onClick={increaseMonth}
                    disabled={nextMonthButtonDisabled}
                  >
                    <NavigateNextRoundedIcon />
                  </HeaderButton>
                </CustomHeader>
              )}
              customInput={
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder={placeholder}
                  value={value || ''}
                  error={error}
                  helperText={helperText}
                  id={id}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <img src="/icons/calendar.svg" alt="Calendar" />
                      </InputAdornment>
                    ),
                  }}
                />
              }
            />
          </StyledDatePickerWrapper>
        </FormControl>
      )}
    />
  );
};

export default DatePickerController;
