import { Typography, Rating, Box } from '@mui/material';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { Review } from '../../../../../../services/camper';
import {
  ReviewContainer,
  ReviewHeader,
  StyledAvatar,
  StyledRatingBox,
} from './ReviewList.styled';

const ReviewItem = ({ review }: { review: Review }) => (
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
    <Typography variant="body1" mt={1}>
      {review.comment}
    </Typography>
  </ReviewContainer>
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
