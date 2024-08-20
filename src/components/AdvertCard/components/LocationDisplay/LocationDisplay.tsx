import { Box, Typography } from '@mui/material';

interface LocationDisplayProps {
  location: string;
}

const LocationDisplay = ({ location }: LocationDisplayProps) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
    <img src="/icons/location.svg" alt="Location" style={{ width: '16px' }} />
    <Typography>{location}</Typography>
  </Box>
);

export default LocationDisplay;
