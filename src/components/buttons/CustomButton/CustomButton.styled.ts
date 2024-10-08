import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  borderRadius: '200px',
  padding: '16px 60px',
  fontStyle: theme.typography.button.fontStyle,
  textTransform: 'none',
  boxShadow: 'none',
  '&.MuiButton-contained': {
    backgroundColor: theme.palette.primary,
    color: '#FFF',
    padding: '16px 32px',
    minWidth: '172px',
  },
  '&.MuiButton-outlined': {
    color: theme.palette.text.primary,
    border: '1px solid rgba(71, 84, 103, 0.20)',
    padding: '16px 32px',
    '&:hover': {
      borderColor: theme.palette.primary,
    },
  },
}));
