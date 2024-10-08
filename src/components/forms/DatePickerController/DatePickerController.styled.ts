import { styled } from '@mui/material/styles';
import { Box, IconButton, Typography } from '@mui/material';

export const StyledDatePickerWrapper = styled(Box)(({ theme }) => ({
  '& .react-datepicker-wrapper': {
    width: '100%',
  },
  '& .react-datepicker': {
    fontFamily: 'Inter, sans-serif !important',
    padding: '16px',
    borderRadius: '12px',
    border: '1px solid rgba(16, 24, 40, 0.20)',
  },
  '& .react-datepicker__header': {
    backgroundColor: '#FFF',
    borderBottom: 'none',
  },
  '& .react-datepicker__current-month': {
    color: theme.palette.text.primary,
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '20px',
  },
  '& .react-datepicker__day-name': {
    textTransform: 'uppercase',
    color: theme.palette.text.secondary,
    fontWeight: 600,
    fontSize: '12px',
  },
  '& .react-datepicker__day': {
    color: theme.palette.text.primary,
  },
  '& .react-datepicker__day--selected': {
    backgroundColor: theme.palette.primary.main,
    color: '#FFF',
  },
  '& .react-datepicker__day--keyboard-selected': {
    backgroundColor: theme.palette.primary.main,
    color: '#FFF',
  },
  '& .react-datepicker__navigation': {
    top: '16px',
    '&.react-datepicker__navigation--previous': {
      borderRightColor: theme.palette.text.primary,
    },
    '&.react-datepicker__navigation--next': {
      borderLeftColor: theme.palette.text.primary,
    },
  },
}));

export const CustomHeader = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: '16px',
});

export const HeaderButton = styled(IconButton)(({ theme }) => ({
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: theme.palette.text.primary,
}));

export const HeaderDate = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.text.primary,
}));
