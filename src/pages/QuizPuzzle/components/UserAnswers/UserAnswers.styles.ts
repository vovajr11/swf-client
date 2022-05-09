import styled from '@emotion/styled';
import { device } from '@theme/index';

export const Score = styled.h2`
  text-align: left;
  font-size: 40px;
`;

export const QuestionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const QuestionCard = styled.li`
  flex: 1 1 100%;
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #ffe9c0;
  border-radius: 10px;

  @media (${device.laptop}) {
    flex: 0 1 calc((100% / 2) - 3.5rem);
  }
`;

export const Question = styled.h3`
  text-align: left;
  font-size: 25px;
`;

export const AnswersList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
`;

export const Answer = styled.li`
  flex: 1 1 100%;
  padding: 10px 0;
  background-color: orange;
  border-radius: 10px;
  margin-bottom: 20px;
  text-align: center;

  @media (${device.laptop}) {
    flex: 0 1 calc((100% / 3) - 3rem);
  }
`;

export const AnswerInfo = styled.div`
  flex: 1;
  margin-left: 40px;
`;

export const UserAnswer = styled.h4`
  font-size: 20px;
  margin-bottom: 10px;

  &.correct {
    color: green;
  }

  &.uncorrect {
    color: red;
  }

  span {
    display: block;
  }
`;

export const CorrectAnswer = styled.h4`
  font-size: 20px;
`;
