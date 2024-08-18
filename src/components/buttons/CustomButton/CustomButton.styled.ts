import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  borderRadius: '200px',
  padding: '16px 60px',
  fontFamily: theme.typography.button.fontFamily,
  fontSize: theme.typography.button.fontSize,
  fontStyle: theme.typography.button.fontStyle,
  fontWeight: theme.typography.button.fontWeight,
  lineHeight: theme.typography.button.lineHeight,
  letterSpacing: theme.typography.button.letterSpacing,
  textTransform: 'none',
  boxShadow: 'none',
  '&.MuiButton-contained': {
    backgroundColor: '#E44848',
    color: '#FFF',
    padding: '16px 32px',
    minWidth: '172px',
    '&:hover': {
      backgroundColor: '#D84343',
    },
  },
  '&.MuiButton-outlined': {
    color: '#101828',
    border: '1px solid rgba(71, 84, 103, 0.20)',
    padding: '16px 32px',
    '&:hover': {
      borderColor: '#E44848',
    },
  },
}));
