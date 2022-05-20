import styled from '@emotion/styled';
import { device } from '@theme/index';

export const QuestionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const QuestionItem = styled.li`
  flex: 0 1 80%;
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 20px;
  background-color: #ffe9c0;
  border-radius: 10px;
  margin-bottom: 30px;
  text-align: left;

  & .col {
    flex: 1;
  }
`;

export const UserAnswer = styled.h3`
  font-size: 20px;
`;
