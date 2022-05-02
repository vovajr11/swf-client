import styled from '@emotion/styled';

export const Card = styled.div``;

export const Question = styled.h2`
  font-size: 50px;
  margin-bottom: 30px;
`;

export const AnswerList = styled.ul`
  width: 300px;
  margin: 0 auto;
`;

export const Answer = styled.li`
  font-size: 30px;
  margin-bottom: 20px;
  padding: 15px 0;
  border-radius: 10px;
  background-color: orange;

  &:hover {
    background-color: #ff8400;
    cursor: pointer;
  }

  &.active {
    background-color: red;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
