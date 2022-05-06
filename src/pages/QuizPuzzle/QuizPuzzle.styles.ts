import styled from '@emotion/styled';
import { device } from '@theme/index';

export const WordColumnStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Background = styled.div`
  background: #f3f3f3;
  min-height: 100px;
  min-width: 341px;
  border-radius: 5px;
  padding: 15px 15px;
`;

export const WordList = styled.div`
  margin-top: 20px;
  display: flex;

  // Word item
  > div {
    margin-right: 20px;
  }
`;

export const Title = styled.span`
  color: #10957d;
  background: rgba(16, 149, 125, 0.15);
  padding: 2px 10px;
  border-radius: 5px;
  align-self: flex-start;
`;
