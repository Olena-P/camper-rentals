import { Typography, Rating, Box } from '@mui/material';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { Review } from '../../../../../../services/camper';
import {
  ReviewContainer,
  ReviewHeader,
  StyledAvatar,
  StyledRatingBox,
} from './ReviewList.styled';

interface ReviewItemProps {
  review: Review;
}

const ReviewItem = ({ review }: ReviewItemProps) => (
  <ReviewContainer>
    <ReviewHeader>
      <StyledAvatar>
        {review.reviewer_name.charAt(0).toUpperCase()}
      </StyledAvatar>
      <Box>
        <Typography variant="subtitle1">{review.reviewer_name}</Typography>
        <StyledRatingBox>
          <Rating
            value={review.reviewer_rating}
            precision={0.5}
            readOnly
            size="small"
            icon={<StarRateRoundedIcon fontSize="inherit" />}
            emptyIcon={
              <StarRateRoundedIcon
                fontSize="inherit"
                sx={{ color: '#F2F4F7' }}
              />
            }
          />
        </StyledRatingBox>
      </Box>
    </ReviewHeader>
    <Typography mt={1}>{review.comment}</Typography>
  </ReviewContainer>
);

interface ReviewListProps {
  reviews: Review[];
}

const ReviewList = ({ reviews }: ReviewListProps) => (
  <Box>
    {reviews.length ? (
      reviews.map((review, index) => <ReviewItem key={index} review={review} />)
    ) : (
      <Typography variant="body2">No reviews yet.</Typography>
    )}
  </Box>
);

export default ReviewList;
