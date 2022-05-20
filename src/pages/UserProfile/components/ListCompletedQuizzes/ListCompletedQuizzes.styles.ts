import styled from '@emotion/styled';
import { device } from '@theme/index';

export const IconWrapper = styled.div`
  width: 70px;
  padding: 10px 0;
  text-align: center;
  background: orange;
  border-radius: 10px;

  & .MuiSvgIcon-root {
    font-size: 40px;
  }
`;

export const ContentWrapper = styled.div`
  flex: 1;
`;

export const QuizList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;
`;

export const QuizItem = styled.li`
  flex: 1 1 100%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 10px;
  padding: 20px;

  @media (${device.laptop}) {
    flex: 0 1 calc((100% / 3) - 5rem);
    display: flex;
    gap: 20px;
    align-items: center;
  }
`;

export const QuizName = styled.h3`
  font-size: 28px;
  margin-bottom: 10px;
`;

export const Score = styled.p`
  margin-bottom: 10px;

  span {
    background-color: orange;
    padding: 2px 10px;
    border-radius: 10px;
    font-size: 20px;
  }
`;
