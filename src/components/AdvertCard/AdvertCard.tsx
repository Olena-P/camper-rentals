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
  PriceBox,
  InfoBox,
  StyledCardActions,
  HeaderBox,
} from './AdvertCard.styled';
import useFormattedCurrency from '../../hooks/useFormattedCurrency';

interface AdvertCardProps {
  advert: CamperAdvert;
}

const AdvertCard = ({ advert }: AdvertCardProps) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isAdvertFavorite = isFavorite(advert._id);

  const handleFavoriteClick = () => {
    toggleFavorite(advert);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const formattedPrice = useFormattedCurrency(advert.price);

  return (
    <>
      <StyledCard>
        <figure>
          <StyledCardMedia
            component="img"
            image={advert.gallery[0]}
            alt={advert.name}
          />
        </figure>

        <StyledCardContent>
          <HeaderBox>
            <Typography variant="h2">{advert.name}</Typography>
            <PriceBox>
              <Typography variant="h3" color="textPrimary">
                {formattedPrice}
              </Typography>
              <IconButton
                aria-label="Add to favorites"
                aria-describedby="favorite-button-description"
                aria-pressed={isAdvertFavorite}
                onClick={handleFavoriteClick}
                color={isAdvertFavorite ? 'primary' : 'default'}
              >
                {isAdvertFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
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
          <EllipsisTypography variant="body2" maxLines={3}>
            {advert.description}
          </EllipsisTypography>
          <CategoryList details={advert.details} />
          <StyledCardActions>
            <CustomButton
              aria-expanded={isModalOpen}
              aria-controls="advert-details-modal"
              onClick={() => setIsModalOpen(true)}
            >
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
