import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  height: fit-content;
  padding: 5px;
  margin: 2px;
  border-radius: 5px;
  background-color: var(--quaternary);
  color: white;
  cursor: pointer;

  small {
    font-weight: 300;
    margin-right: 10px;
    word-wrap: none;
  }

  &:hover {
    background-color: var(--terciary);
  }

  &:active {
    background-color: var(--primary);
  }
`;
