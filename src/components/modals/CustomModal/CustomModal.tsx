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
    <StyledDialog open={open} onClose={onClose}>
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
    </StyledDialog>
  );
};

export default CustomModal;
