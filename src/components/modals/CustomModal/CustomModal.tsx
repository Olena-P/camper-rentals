import { Typography } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { ReactNode } from 'react';
import {
  StyledDialog,
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
    <StyledDialog
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby={subtitle ? 'modal-subtitle' : undefined}
    >
      <StyledDialogTitle>
        <StyledBox>
          <Typography variant="h2" id="modal-title">
            {title}
          </Typography>
          <StyledIconButton onClick={onClose} aria-label="Close modal">
            <StyledCloseRoundedIcon>
              <CloseRoundedIcon />
            </StyledCloseRoundedIcon>
          </StyledIconButton>
        </StyledBox>
        {subtitle && (
          <Typography
            variant="subtitle1"
            color="textSecondary"
            id="modal-subtitle"
          >
            {subtitle}
          </Typography>
        )}
      </StyledDialogTitle>
      <StyledDialogContent dividers={false} sx={{ padding: 0 }}>
        {children}
      </StyledDialogContent>
    </StyledDialog>
  );
};

export default CustomModal;
