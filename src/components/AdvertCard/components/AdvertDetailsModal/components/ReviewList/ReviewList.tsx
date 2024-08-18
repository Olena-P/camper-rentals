import { Box, Typography, Avatar, Rating } from '@mui/material';
import { Review } from '../../../../../../services/camper';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

const ReviewItem = ({ review }: { review: Review }) => (
  <Box>
    <Box display="flex" alignItems="center" sx={{ gap: '16px' }}>
      <Avatar
        sx={{
          width: '60px',
          height: '60px',
          borderRadius: '60px',
          backgroundColor: '#F2F4F7',
          color: 'primary.main',
          fontSize: '24px',
          fontWeight: 'bold',
        }}
      >
        {review.reviewer_name.charAt(0).toUpperCase()}
      </Avatar>
      <Box>
        <Typography variant="subtitle1">{review.reviewer_name}</Typography>
        <Rating
          value={review.reviewer_rating}
          precision={0.5}
          readOnly
          size="small"
          sx={{ mt: '4px' }}
          icon={<StarRateRoundedIcon fontSize="inherit" />}
          emptyIcon={
            <StarRateRoundedIcon fontSize="inherit" sx={{ color: '#F2F4F7' }} />
          }
        />
      </Box>
    </Box>
    <Typography variant="body1" mt={1}>
      {review.comment}
    </Typography>
  </Box>
);

const ReviewList = ({ reviews }: { reviews: Review[] }) => (
  <Box>
    {reviews.length ? (
      reviews.map((review, index) => <ReviewItem key={index} review={review} />)
    ) : (
      <Typography variant="body2">No reviews yet.</Typography>
    )}
  </Box>
);

export default ReviewList;
