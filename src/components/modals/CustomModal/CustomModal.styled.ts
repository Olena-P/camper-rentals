import { styled } from '@mui/material/styles';
import {
  DialogContent,
  DialogTitle,
  IconButton,
  Box,
  Dialog,
} from '@mui/material';

export const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    height: '720px',
    width: '100%',
    maxWidth: '982px',
    padding: theme.breakpoints.down('md') ? '24px' : '40px',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '8px',
    flexShrink: 0,
    borderRadius: '20px',
    background: '#FFF',
  },
  '& .MuiBackdrop-root': {
    backgroundColor: '#11121366',
  },
}));

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
