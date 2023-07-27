import styled from 'styled-components';

export const StyledFilterBar = styled.label`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  font-size: 20px;
  width: 100%;

  & input {
    margin-top: 20px;
    border: 1px solid #ddd;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
`;
