import React from "react";
import { Container, RecGroup, RecForm } from "./styles";

import Logo from "../Logo";
import LogoEmp from "../Footer";

const Recovery: React.FC = () => {
  return (
    <Container>
      <Logo />

      <RecForm action="/success">
        <RecGroup>
          <h1>Recuperação de Senha:</h1>
          <p>
            Digite abaixo o seu e-mail que enviaremos para você uma nova senha.
          </p>
        </RecGroup>
        <div className="inputGroup">
          <input required type="email" />
          <label htmlFor="">E-mail</label>
        </div>
        <button type="submit">Enviar</button>
      </RecForm>

      <LogoEmp />
    </Container>
  );
};

export default Recovery;
