import styled from "styled-components";

import { Props } from ".";

export const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  padding: 20px;
  padding-right: 40px;
  margin: 5px;
  border-radius: 8px;
  justify-content: initial;
  height: auto;
  width: 100%;
  min-width: 340px;
  box-shadow: 1px 1px 5px -1px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.5s ease;

  ::before {
    position: absolute;
    bottom: 0px;
    width: 0%;
    opacity: 0;
    transition: all 0.5s ease;
    content: "";
  }

  :hover {
    box-shadow: 2px 2px 10px -1px rgba(0, 0, 0, 0.2);

    &::before {
      position: absolute;
      width: 90%;
      height: 2px;
      border-radius: 3px;
      opacity: 1;
      background: linear-gradient(
        90deg,
        rgba(81, 181, 106, 0) 0%,
        var(--secondary) 48%,
        rgba(0, 255, 29, 0) 100%
      );
      content: "";
    }
  }

  :active {

    box-shadow: inset 1px 1px 8px -1px rgba(0, 0, 0, 0.2);

    &::before {
      content: "";
      background: linear-gradient(
        90deg,
        rgba(81, 181, 106, 0) 0%,
        var(--quaternary) 48%,
        rgba(0, 255, 29, 0) 100%
      );
    }
  }
`;
export const Info = styled.div`
  display: flex;

  margin: 10px 30px;

  strong {
    font-size: 15px;
    color: var(--terciary);
    font-weight: 500;
    text-decoration: none;
  }

  p {
    margin: 0px 0px 0px 5px;
    font-size: 15px;
    color: var(--quaternary);
    font-weight: 400;
  }
  
`;

export const Icon = styled.div<Props>`
  position: absolute;
  color: #ffff;
  border: 1px solid #ffff;
  right: 15px;
  align-self: center;
  display: ${(props) => (props.hasAttachment ? "inline" : "none")};
`;
