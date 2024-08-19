import { styled } from '@mui/material/styles';
import { Box, Typography, Grid, Divider, Theme } from '@mui/material';

export const StyledBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '95px',
  padding: '17px 40px',
  gap: '8px',
  borderRadius: '10px',
  cursor: 'pointer',
  width: '100%',
}));

export const FilterIconBox = styled(StyledBox)(
  ({ selected, theme }: { selected: boolean; theme: Theme }) => ({
    border: selected
      ? `1px solid ${theme.palette.primary.main}`
      : '1px solid rgba(0, 0, 0, 0.23)',
    mixBlendMode: selected ? 'multiply' : 'normal',
  })
);

export const FilterTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export const FilterSubtitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

export const StyledDivider = styled(Divider)(({ theme }) => ({
  margin: theme.spacing(3, 0),
}));

export const GridItem = styled(Grid)({
  marginBottom: '2px',
});
