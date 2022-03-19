import styled from 'styled-components';

export const Background = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(107.54deg, #ffecf5 0%, #fff8ec 100%);
`;

export const SectionStart = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 70px;
  gap: 50px;
`;

export const Logo = styled.h2`
  color: ${({ theme }) => theme.color.orange};
  font-size: 70px;
  letter-spacing: 25px;
`;

export const PreviewContent = styled.div`
  margin: 85px 0;

  > h1 {
    font: bold 48px/1.45 'Roboto', sans-serif;
    color: ${({ theme }) => theme.color.primaryLight};
  }

  > p {
    font: 18px/2.22 'Roboto', sans-serif;
    color: ${({ theme }) => theme.color.gray};
    font-weight: 500;
  }

  @media (min-width: 1440px) {
    > h1 {
      font-size: 75px;
    }

    > p {
      font-size: 25px;
    }
  }
`;

export const AuthButton = styled.div`
  > button:last-child {
    margin-left: 40px;
  }
`;
