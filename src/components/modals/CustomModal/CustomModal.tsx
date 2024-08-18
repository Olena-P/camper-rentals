import { Dialog, Typography } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { ReactNode } from 'react';
import {
  StyledDialogContent,
  StyledDialogTitle,
  StyledBox,
  StyledIconButton,
  StyledCloseRoundedIcon,
} from './CustomModal.styled';

interface CustomModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: ReactNode;
  children: ReactNode;
}

const CustomModal = ({
  open,
  onClose,
  title,
  subtitle,
  children,
}: CustomModalProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        style: {
          height: '720px',
          width: '100%',
          maxWidth: '982px',
          padding: '40px',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '8px',
          flexShrink: 0,
          borderRadius: '20px',
          background: '#FFF',
        },
      }}
      BackdropProps={{
        style: {
          backgroundColor: '#11121366',
        },
      }}
    >
      <StyledDialogTitle>
        <StyledBox>
          <Typography variant="h1">{title}</Typography>
          <StyledIconButton onClick={onClose}>
            <StyledCloseRoundedIcon>
              <CloseRoundedIcon />
            </StyledCloseRoundedIcon>
          </StyledIconButton>
        </StyledBox>
        {subtitle && (
          <Typography variant="subtitle1" color="textSecondary">
            {subtitle}
          </Typography>
        )}
      </StyledDialogTitle>
      <StyledDialogContent dividers={false} sx={{ padding: 0 }}>
        {children}
      </StyledDialogContent>
    </Dialog>
  );
};

export default CustomModal;
