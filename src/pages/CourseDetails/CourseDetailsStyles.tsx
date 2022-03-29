import styled from '@emotion/styled';
import { device } from '@theme/index';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Item = styled.li`
  flex: 1 1 100%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 10px;
  padding: 10px;

  @media (${device.laptop}) {
    display: flex;
    flex: 0 1 calc((100% / 2) - 2rem);
  }
`;

export const Content = styled.div`
  margin-left: 20px;

  > h2 {
    font-size: 30px;
  }

  .number-of-modules {
    font-size: 18px;
    margin: 15px 0;

    > span {
      background-color: #c0fdc0;
      border-radius: 10px;
      padding: 2px 10px;
    }
  }

  .description {
    margin-bottom: 15px;
  }

  > button {
    text-align: right;
  }
`;
