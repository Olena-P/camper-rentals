import { useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Box,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useFavorites } from '../../hooks/useFavorites';
import EllipsisTypography from '../EllipsisTypography';
import CustomButton from '../buttons/CustomButton';
import { CamperAdvert } from '../../services/camper';
import CategoryList from './components/CategoryList/CategoryList';
import RatingDisplay from './components/RatingDisplay';
import LocationDisplay from './components/LocationDisplay';
import AdvertDetailsModal from './components/AdvertDetailsModal';

interface AdvertCardProps {
  advert: CamperAdvert;
}

const AdvertCard = ({ advert }: AdvertCardProps) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFavoriteClick = () => {
    toggleFavorite(advert);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Card
        sx={{
          display: 'flex',
          padding: '24px',
          gap: '24px',
          borderRadius: '20px',
          border: '1px solid rgba(16, 24, 40, 0.20)',
          backgroundColor: '#FFF',
          boxShadow: 'none',
        }}
      >
        <CardMedia
          component="img"
          height="310"
          width="290px !important"
          image={advert.gallery[0]}
          alt={advert.name}
          sx={{
            width: '290px !important',
            borderRadius: '10px',
          }}
        />
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '0 !important',
            gap: '24px',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <Typography variant="h2">{advert.name}</Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Typography variant="h2" color="textPrimary">
                  €{advert.price.toFixed(2)}
                </Typography>
                <IconButton
                  aria-label="add to favorites"
                  onClick={handleFavoriteClick}
                  color={isFavorite(advert._id) ? 'primary' : 'default'}
                >
                  {isFavorite(advert._id) ? (
                    <FavoriteIcon />
                  ) : (
                    <FavoriteBorderIcon />
                  )}
                </IconButton>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              <RatingDisplay
                rating={advert.rating}
                reviewCount={advert.reviews.length}
              />
              <LocationDisplay location={advert.location} />
            </Box>
          </Box>
          <EllipsisTypography variant="body2">
            {advert.description}
          </EllipsisTypography>
          <CategoryList details={advert.details} />
          <CardActions sx={{ marginTop: 'auto', padding: 0 }}>
            <CustomButton onClick={() => setIsModalOpen(true)}>
              Show more
            </CustomButton>
          </CardActions>
        </CardContent>
      </Card>
      <AdvertDetailsModal
        open={isModalOpen}
        onClose={handleModalClose}
        advert={advert}
      />
    </>
  );
};

export default AdvertCard;
