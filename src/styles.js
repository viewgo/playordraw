import styled from "styled-components";

export const Display = styled.div`
  width: 100%;
  margin: 0 auto;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-self: center;
`;

export const Button = styled.button`
  border: 0;
  padding: 10px;
  margin: 10px;
  width: 150px;
`;

export const Attributes = styled.div`
  padding: 10%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  color: red;
  font-size: 24px;

  h1 {
    margin: 0;
    font-size: 5rem;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: black;
  }
  h2 {
    margin: 0;
    font-size: 4rem;
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: black;
  }
`;

export const Attributes2 = styled(Attributes)`
  color: blue;
`;
