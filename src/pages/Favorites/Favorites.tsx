import { Grid, Typography, Container } from '@mui/material';
import { useFavorites } from '../../hooks/useFavorites';
import AdvertCard from '../../components/AdvertCard';

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <Container maxWidth="xl" sx={{ padding: { xs: '20px', sm: '32px 64px' } }}>
      <Typography variant="h1" color="primary" paragraph>
        Your Favorite Campers
      </Typography>
      <Grid container spacing={4}>
        {favorites.length === 0 ? (
          <Grid item xs={12}>
            <Typography variant="h6" color="textSecondary" role="alert">
              No campers match your search criteria.
            </Typography>
          </Grid>
        ) : (
          favorites.map((advert) => (
            <Grid item xs={12} key={advert._id}>
              <AdvertCard advert={advert} />
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};

export default Favorites;
