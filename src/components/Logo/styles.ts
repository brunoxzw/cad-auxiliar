import styled from "styled-components";

export const LogoBody = styled.div`
  margin: 0;
  grid-area: logo;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;

  h1 {
    margin: 0;
    font-size: 22px;
    color: var(--primary);
    font-family: -apple-system, BlinkMacSystemFont, Ubuntu;
    font-weight: bolder;
  }

  h2 {
    margin: 0;
    font-size: 15px;
    color: var(--quaternary);
    font-weight: 300;
    letter-spacing: 3px;
  }
`;
