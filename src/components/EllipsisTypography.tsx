import { Typography, TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';

interface EllipsisTypographyProps extends TypographyProps {
  maxLines?: number;
}

const EllipsisTypography = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'maxLines',
})<EllipsisTypographyProps>(({ maxLines = 1 }) => ({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  WebkitLineClamp: maxLines,
}));

export default EllipsisTypography;
