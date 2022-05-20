import React from 'react';
import styled from '@emotion/styled';
import { theme } from '@theme/index';
import { sizes, variants } from './ButtonStyles';

interface ButtonProps {
  onClick?:
    | React.MouseEventHandler<HTMLButtonElement>
    | React.Dispatch<React.SetStateAction<{}>>;
  children?: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'outlined' | 'contained';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button = ({
  onClick,
  className,
  children,
  type,
  disabled = false,
}: ButtonProps) => (
  <button
    disabled={disabled}
    onClick={onClick}
    className={className}
    type={type}
  >
    {children}
  </button>
);

const StyledButton = styled(Button)<ButtonProps>`
  ${({ size = 'md' }) => sizes[size]};
  ${({ variant = 'contained' }) => variants[variant]};

  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  font-weight: 500;
  outline: none;
  min-width: 64px;
  border-radius: 4px;
  opacity: ${({ disabled }) => (disabled ? '0.8' : '1')};

  > a {
    color: ${theme.color.white};
  }
`;

export default StyledButton;
