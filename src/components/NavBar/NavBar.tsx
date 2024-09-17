import { AppBar, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import {
  LogoContainer,
  LogoImage,
  LogoText,
  NavLinksContainer,
  StyledToolbar,
} from './NavBar.styled';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavBar = () => {
  const NavLink = ({ to, children }: NavLinkProps) => (
    <Link
      component={RouterLink}
      to={to}
      sx={{
        display: 'flex',
        color: 'inherit',
        textDecoration: 'none',
        '&:hover': { textDecoration: 'underline' },
      }}
    >
      {children}
    </Link>
  );

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <LogoContainer>
          <NavLink to="/">
            <LogoImage src="/icons/logo.svg" alt="Camper Rent Logo" />
            <LogoText>Camper Rent</LogoText>
          </NavLink>
        </LogoContainer>
        <NavLinksContainer component="nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/catalog">Catalog</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </NavLinksContainer>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;
