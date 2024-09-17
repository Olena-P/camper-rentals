import { Box, Typography } from '@mui/material';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

interface RatingDisplayProps {
  rating: number;
  reviewCount: number;
}

const RatingDisplay = ({ rating, reviewCount }: RatingDisplayProps) => (
  <Box
    sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}
    role="group"
    aria-label={`Rating: ${rating} out of 5`}
  >
    <StarRateRoundedIcon
      color="secondary"
      sx={{ width: '20px', height: '20px' }}
      aria-hidden="true"
    />
    <Typography variant="overline" aria-live="polite">
      {rating.toFixed(1)} ({reviewCount}{' '}
      {reviewCount === 1 ? 'Review' : 'Reviews'})
    </Typography>
  </Box>
);

export default RatingDisplay;
