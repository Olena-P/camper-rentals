import { Box, Typography, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import CustomButton from '../../components/buttons/CustomButton';
import BookingForm, {
  BookingFormData,
} from '../../components/AdvertCard/components/AdvertDetailsModal/components/BookingForm';

const Home = () => {
  const handleFormSubmit = (data: BookingFormData) => {
    console.log('Form Submitted', data);
  };

  return (
    <Container maxWidth="xl" sx={{ padding: { xs: '20px', sm: '32px 64px' } }}>
      <Grid container spacing={'24px'} sx={{ paddingTop: '44px' }}>
        <Grid item xs={12} md={6}>
          <Box display="flex" flexDirection="column">
            <Typography variant="h1" color="primary" gutterBottom>
              Welcome to Camper Rent
            </Typography>
            <Typography variant="h2" color="text.secondary" paragraph>
              Discover the best campers for rent across Ukraine. Enjoy a
              hassle-free travel experience with our well-equipped campers.
            </Typography>

            <Box mb={4}>
              <Typography color="text.primary" paragraph>
                We offer a wide range of campers to suit your needs, whether
                you're looking for a cozy getaway or a fully equipped adventure
                vehicle. Our fleet is maintained to the highest standards,
                ensuring you have a reliable and enjoyable trip. Explore our
                catalog to find the perfect camper for your next journey!
              </Typography>
            </Box>

            <CustomButton component={Link} to="/catalog" variant="contained">
              Explore Catalog
            </CustomButton>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <BookingForm onSubmit={handleFormSubmit} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
