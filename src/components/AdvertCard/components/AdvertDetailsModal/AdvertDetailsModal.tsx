import { Box, Grid, Typography, CardMedia } from '@mui/material';
import BookingForm, { BookingFormData } from './components/BookingForm';
import TabsSection from './components/TabsSection';
import VehicleDetails from './components/VehicleDetails';
import ReviewList from './components/ReviewList';
import { useState } from 'react';
import RatingDisplay from '../RatingDisplay';
import LocationDisplay from '../LocationDisplay';
import CustomModal from '../../../modals/CustomModal';
import { CamperAdvert } from '../../../../services/camper';
import CategoryList from '../CategoryList';

interface AdvertDetailsModalProps {
  open: boolean;
  onClose: () => void;
  advert: CamperAdvert;
}

const AdvertDetailsModal = ({
  open,
  onClose,
  advert,
}: AdvertDetailsModalProps) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabChange = (newValue: number) => {
    setActiveTab(newValue);
  };

  const handleFormSubmit = (data: BookingFormData) => {
    console.log('Form Submitted', data);
    onClose();
  };

  return (
    <CustomModal open={open} onClose={onClose} title={advert.name}>
      <>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <RatingDisplay
            rating={advert.rating}
            reviewCount={advert.reviews.length}
          />
          <LocationDisplay location={advert.location} />
        </Box>
        <Typography variant="h1" mt={'16px'}>
          €{advert.price}
        </Typography>
        <Grid
          container
          spacing="16px"
          sx={{ marginTop: '24px', marginBottom: '24px' }}
        >
          {advert.gallery.map((image, index) => (
            <Grid item xs={12} md={4} key={index}>
              <CardMedia
                component="img"
                src={image}
                alt={`Image ${index + 1}`}
                sx={{
                  height: '310px',
                  borderRadius: '10px',
                  objectFit: 'cover',
                }}
              />
            </Grid>
          ))}
        </Grid>
        <Typography variant="body1">{advert.description}</Typography>
      </>
      <TabsSection activeTab={activeTab} handleTabChange={handleTabChange} />

      {activeTab === 0 && (
        <Grid container spacing={'24px'} sx={{ paddingTop: '44px' }}>
          <Grid item xs={12} md={6}>
            <CategoryList details={advert.details} />
            <VehicleDetails details={advert} />
          </Grid>
          <Grid item xs={12} md={6}>
            <BookingForm onSubmit={handleFormSubmit} />
          </Grid>
        </Grid>
      )}

      {activeTab === 1 && (
        <Grid container spacing={2} sx={{ paddingTop: '44px' }}>
          <Grid item xs={12} md={6}>
            <ReviewList reviews={advert.reviews} />
          </Grid>
          <Grid item xs={12} md={6}>
            <BookingForm onSubmit={handleFormSubmit} />
          </Grid>
        </Grid>
      )}
    </CustomModal>
  );
};

export default AdvertDetailsModal;
