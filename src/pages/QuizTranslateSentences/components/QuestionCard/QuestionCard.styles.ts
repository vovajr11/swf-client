import styled from '@emotion/styled';

export const Wrapp = styled.div`
  max-width: 1000px;

  border-radius: 3% 95% 6% 95%/101% 11% 84% 6%;
  background-color: orange;
  transform: rotate(-2deg);
  text-align: center;
  margin: 30px auto 30px auto;
`;

export const InputWrapp = styled.div`
  width: 400px;
  margin: auto;
  padding-bottom: 80px;
  transform: rotate(2deg);

  > input {
    border-radius: 10px;
    padding: 10px;
  }
`;

export const Question = styled.h2`
  font-size: 40px;
  padding: 40px 0;
  transform: rotate(2deg);
`;
