import { AppBar, Toolbar, Box, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar
        sx={{
          alignSelf: 'center',
          width: '100%',
          maxWidth: 'xl',
          padding: { xs: '0 20px', sm: '0 64px' },
        }}
      >
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <Link
            component={RouterLink}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
            }}
          >
            <img
              src="/icons/logo.svg"
              alt="Camper Rent Logo"
              style={{ width: '40px', marginRight: '8px' }}
            />
            <Typography variant="h6" component="div" sx={{ color: 'white' }}>
              Camper Rent
            </Typography>
          </Link>
        </Box>
        <Box sx={{ display: 'flex', gap: '16px' }}>
          <Link
            component={RouterLink}
            to="/"
            sx={{ color: 'inherit', textDecoration: 'none' }}
          >
            Home
          </Link>
          <Link
            component={RouterLink}
            to="/catalog"
            sx={{ color: 'inherit', textDecoration: 'none' }}
          >
            Catalog
          </Link>
          <Link
            component={RouterLink}
            to="/favorites"
            sx={{ color: 'inherit', textDecoration: 'none' }}
          >
            Favorites
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
