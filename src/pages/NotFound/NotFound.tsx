import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container maxWidth="xs" sx={{ textAlign: 'center', mt: 8 }}>
      <Typography variant="h1" gutterBottom>
        Page Not Found
      </Typography>
      <img src="/icons/404.svg" alt="Page not found 404" />
      <Typography paragraph>
        The page you are looking for does not exist.
      </Typography>
      <Button component={Link} to="/" variant="contained">
        Go to Home
      </Button>
    </Container>
  );
};

export default NotFound;
