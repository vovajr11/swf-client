import styled from 'styled-components';

export const Wrapp = styled.div`
  position: relative;

  > select {
    display: none;
  }
`;

export const Select = styled.select`
  /* Reset Select */
  appearance: none;
  outline: 0;
  border: 0;
  box-shadow: none;
  /* Personalize */
  flex: 1;
  padding: 0 1em;
  color: #fff;
  background-color: gray;
  background-image: none;
  cursor: pointer;

  > &::-ms-expand {
    display: none;
  }
`;
