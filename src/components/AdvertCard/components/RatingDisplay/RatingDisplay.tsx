import { Box, Typography } from '@mui/material';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

interface RatingDisplayProps {
  rating: number;
  reviewCount: number;
}

const RatingDisplay = ({ rating, reviewCount }: RatingDisplayProps) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
    <StarRateRoundedIcon
      color="secondary"
      sx={{ width: '20px', height: '20px' }}
    />
    <Typography variant="overline">
      {rating} ({reviewCount} {reviewCount === 1 ? 'Review' : 'Reviews'})
    </Typography>
  </Box>
);

export default RatingDisplay;
