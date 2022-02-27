import styled from 'styled-components';

export const Button = styled.button`
    font-size: 36px;
    padding: 18px 70px;
    border-radius: 20px;
    color: ${({ theme }) => theme.color.white}
`;

export const PrimaryBtn = styled(Button)`
    background: ${({ theme }) => theme.color.orange};
`;

export const GradientBtn = styled(Button)`
    background: linear-gradient(89.76deg, #FA982F 0.18%, #FF5E43 99.78%, rgba(196, 196, 196, 0) 99.78%);
    filter: drop-shadow(2px 5px 4px rgba(0, 0, 0, 0.25));
`;