import { styled } from '@mui/material/styles';
import { Toolbar, Box, Typography } from '@mui/material';

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignSelf: 'center',
  width: '100%',
  maxWidth: theme.breakpoints.values.xl,
  padding: '0 20px',
  [theme.breakpoints.up('sm')]: {
    padding: '0 64px',
  },
}));

export const LogoContainer = styled(Box)({
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
});

export const NavLinksContainer = styled(Box)({
  display: 'flex',
  gap: '16px',
});

export const LogoImage = styled('img')({
  width: '32px',
  marginRight: '8px',
});

export const LogoText = styled(Typography)(({ theme }) => ({
  display: 'none',
  color: theme.palette.common.white,
  [theme.breakpoints.up('md')]: {
    display: 'block',
  },
}));
