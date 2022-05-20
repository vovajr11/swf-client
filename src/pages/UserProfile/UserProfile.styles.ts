import styled from '@emotion/styled';

export const UserInformationSection = styled.section`
  text-align: center;
`;

export const UserPhotoWrapper = styled.div`
  max-width: 200px;
  margin: auto;
  background: orange;
  border-radius: 10px;

  & .MuiSvgIcon-root {
    font-size: 10rem;
  }
`;

export const UserName = styled.h1`
  font-size: 40px;
`;
export const UserEmail = styled.h2`
  font-size: 20px;
  font-weight: 400;
  color: gray;
`;
