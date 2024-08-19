import { styled } from '@mui/material/styles';
import { Box, Avatar } from '@mui/material';

export const ReviewContainer = styled(Box)({});

export const ReviewHeader = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
});

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: '60px',
  height: '60px',
  borderRadius: '60px',
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.primary.main,
  fontSize: '24px',
  fontWeight: 'bold',
}));

export const StyledRatingBox = styled(Box)({
  marginTop: '4px',
});
