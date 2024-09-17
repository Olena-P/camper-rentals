import { styled } from '@mui/material/styles';
import { Card, CardContent, CardMedia, Box, CardActions } from '@mui/material';

export const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '12px 12px 24px',
  gap: '24px',
  borderRadius: '20px',
  border: '1px solid rgba(16, 24, 40, 0.20)',
  backgroundColor: '#FFF',
  boxShadow: 'none',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    padding: '24px',
  },
}));

export const StyledCardMedia = styled(CardMedia)<{
  component: string;
  alt: string;
}>(({ theme }) => ({
  height: '310px',
  width: '100% !important',
  borderRadius: '10px',
  [theme.breakpoints.up('md')]: {
    width: '290px !important',
  },
}));

export const StyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  padding: '0 !important',
  gap: '24px',
});

export const HeaderBox = styled('figcaption')({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
});

export const PriceBox = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '12px',
});

export const InfoBox = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '16px',
});

export const StyledCardActions = styled(CardActions)({
  marginTop: 'auto',
  padding: '0',
});
