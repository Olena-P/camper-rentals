import { styled } from '@mui/material/styles';
import { DialogContent, DialogTitle, IconButton, Box } from '@mui/material';

export const StyledDialogContent = styled(DialogContent)(() => ({
  flex: 1,
  overflowY: 'auto',
}));

export const StyledDialogTitle = styled(DialogTitle)(() => ({
  width: '100%',
  padding: 0,
}));

export const StyledBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
}));

export const StyledIconButton = styled(IconButton)(() => ({
  padding: 0,
}));

export const StyledCloseRoundedIcon = styled('div')(() => ({
  width: '32px',
  height: '32px',
  fill: '#000',
}));
