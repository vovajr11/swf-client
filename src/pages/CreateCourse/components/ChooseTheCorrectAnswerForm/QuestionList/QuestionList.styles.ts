import styled from '@emotion/styled';

export const Test = styled.div`
  .characters {
    list-style: none;
    padding-left: 0;
  }

  .characters li {
    display: flex;
    align-items: center;
    border: solid 2px #d0d0d0;
    border-radius: 0.2em;
    padding: 0.5em 0.8em 0.5em 0.5em;
    margin-bottom: 1em;
  }

  .characters p {
    max-width: none;
    font-weight: bold;
    margin: 0;
  }

  .characters-thumb {
    overflow: hidden;
    flex-shrink: 0;
    width: 2em;
    height: 2em;
    background-color: #e8e8e8;
    padding: 0.5em;
    margin-right: 0.5em;
  }
`;
