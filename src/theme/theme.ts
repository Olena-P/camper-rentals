import { createTheme } from '@mui/material/styles';
import { breakpoints } from './breakpoints';
import { typography } from './typography';
import { palette } from './palette';

const theme = createTheme({
  typography,
  palette,
  breakpoints,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { overflowY: 'scroll !important' },
        body: {
          backgroundColor: '#ffffff',
        },
        ul: {
          listStyle: 'none',
          padding: 0,
          margin: 0,
        },
        li: {
          listStyle: 'none',
        },
        '::-webkit-scrollbar': {
          width: '8px',
        },
        '::-webkit-scrollbar-track': {
          background: '#fff',
        },
        '::-webkit-scrollbar-thumb': {
          backgroundColor: '#d9d9d9',
          borderRadius: '10px',
        },
        '::-webkit-scrollbar-thumb:hover': {
          background: '#555',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '200px',
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
        },
        contained: {
          color: '#FFF',
          backgroundColor: palette.primary.main,
          padding: '16px 60px',
          '&:hover': {
            backgroundColor: '#D84343',
          },
        },
        outlined: {
          color: palette.text.primary,
          border: '1px solid rgba(71, 84, 103, 0.20)',
          padding: '16px 32px',
          '&:hover': {
            borderColor: palette.primary.main,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          '&:hover': {
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: 'transparent',
            },
          },
          '&.Mui-focused': {
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: 'transparent',
            },
          },
          '& input': {
            borderRadius: '10px',
            padding: '18px',
          },
          '& fieldset': {
            borderColor: 'transparent',
            '&:hover': {
              borderColor: 'transparent',
            },
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            background: palette.background.default,
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          background: palette.background.default,
          padding: '18px',
          '& .MuiSelect-select': {
            padding: '18px',
          },
          '& .MuiSelect-icon': {
            color: palette.text.primary,
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent',
          },
        },
        select: {
          padding: '18px',
          '&.MuiSelect-select': {
            padding: 0,
          },
        },
        icon: {
          display: 'none',
        },
      },
    },
  },
});

export default theme;
