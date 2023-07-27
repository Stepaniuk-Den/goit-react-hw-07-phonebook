import styled from 'styled-components';

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  margin-top: 20px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: inset rgba(0, 0, 0, 0.25) 0px 14px 28px,
    inset rgba(0, 0, 0, 0.22) 0px 10px 10px;
  & h2 {
    font-size: 2rem;
    margin: 10px 0;
  }
`;
