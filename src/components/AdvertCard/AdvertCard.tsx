import { useState } from 'react';
import { Typography, IconButton } from '@mui/material';
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
import {
  StyledCard,
  StyledCardMedia,
  StyledCardContent,
  HeaderBox,
  PriceBox,
  InfoBox,
  StyledCardActions,
} from './AdvertCard.styled';

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
      <StyledCard>
        <StyledCardMedia
          component="img"
          image={advert.gallery[0]}
          alt={advert.name}
        />

        <StyledCardContent>
          <HeaderBox>
            <Typography variant="h2">{advert.name}</Typography>
            <PriceBox>
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
            </PriceBox>
          </HeaderBox>
          <InfoBox>
            <RatingDisplay
              rating={advert.rating}
              reviewCount={advert.reviews.length}
            />
            <LocationDisplay location={advert.location} />
          </InfoBox>
          <EllipsisTypography variant="body2">
            {advert.description}
          </EllipsisTypography>
          <CategoryList details={advert.details} />
          <StyledCardActions>
            <CustomButton onClick={() => setIsModalOpen(true)}>
              Show more
            </CustomButton>
          </StyledCardActions>
        </StyledCardContent>
      </StyledCard>
      <AdvertDetailsModal
        open={isModalOpen}
        onClose={handleModalClose}
        advert={advert}
      />
    </>
  );
};

export default AdvertCard;
