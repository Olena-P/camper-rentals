import { ButtonProps } from '@mui/material';
import { Link } from 'react-router-dom';
import { StyledButton } from './CustomButton.styled';

interface CustomButtonProps extends ButtonProps {
  variant?: 'contained' | 'outlined';
  component?: React.ElementType;
  to?: string;
}

const CustomButton = ({
  variant = 'contained',
  component: Component = 'button',
  to,
  ...props
}: CustomButtonProps) => {
  return (
    <StyledButton
      component={Component}
      variant={variant}
      {...(Component === Link && { to })}
      {...props}
    />
  );
};

export default CustomButton;
