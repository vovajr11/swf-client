import React from 'react';
import styled from 'styled-components';
import { sizes, looks } from './ButtonStyles';

interface ButtonProps {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    children?: React.ReactNode;
    className?: string;
    radius?: number;
    size?: 'sm' | 'md' | 'lg';
    look?: 'primary';
    type?: 'button' | 'submit' | 'reset';
}

const Button = ({ onClick, className, children, type }: ButtonProps) => (
    <button onClick={onClick} className={className} type={type}>
        {children}
    </button>
);

const StyledButton = styled(Button)`
    ${({ size = 'md' }) => sizes[size]};
    ${({ look = 'primary' }) => looks[look]};

    outline: none;
    border-radius: ${({ radius = 5 }) => radius}px;
`;

export default StyledButton;
