import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CategoryItem = styled(Box)(() => ({
  display: 'flex',
  width: 'fit-content',
  padding: '12px 18px',
  alignItems: 'center',
  gap: '8px',

  borderRadius: '100px',
  background: '#F2F4F7',
  mixBlendMode: 'multiply',
}));
