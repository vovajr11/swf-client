import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  /* justify-content: space-around; */
`;

export const EditorWrapper = styled.section`
  width: 80%;
`;

export const CourseInfoWrapper = styled.section`
  width: 20%;
`;

export const ButtonList = styled.div`
  text-align: center;

  > button {
    margin: 0 auto 20px auto;
    display: block;

    &:last-child {
      margin: 0 auto;
    }
  }
`;
