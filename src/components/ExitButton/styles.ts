import styled from "styled-components"

export const Exit = styled.div`
  display: flex;
  color: var(--primary);
  font-size: 20px;
  grid-area: exit;
  align-self: center;
  justify-self: left;
  cursor: pointer;
  transition: all 0.3s ease;
  align-items: center;

  &:hover {
    color: var(--secondary);
    transition: all 0s;
  }

  &:active {
    color: var(--terciary);
    transition: all 0s;
  }
`