import { Box, Typography, Divider } from '@mui/material';
import { CamperAdvert } from '../../../../../../services/camper';

const VehicleDetails = ({ details }: { details: CamperAdvert }) => {
  const keysToRender = [
    'form',
    'length',
    'width',
    'height',
    'tank',
    'consumption',
  ];

  return (
    <>
      <Typography variant="h2" sx={{ marginTop: '44px' }}>
        Vehicle details
      </Typography>
      <Divider sx={{ margin: '24px 0' }} />
      <Box
        component="ul"
        sx={{ display: 'flex', flexDirection: 'column', gap: '14px' }}
      >
        {Object.entries(details)
          .filter(([key]) => keysToRender.includes(key))
          .map(([key, value], index) => (
            <Box
              component="li"
              key={index}
              sx={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <Typography variant="subtitle2">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </Typography>
              <Typography variant="subtitle2">
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </Typography>
            </Box>
          ))}
      </Box>
    </>
  );
};

export default VehicleDetails;
