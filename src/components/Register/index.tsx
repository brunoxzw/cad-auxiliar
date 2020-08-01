import React from "react";
import { Container, Form } from "./styles";

import Logo from "../Logo";
import Footer from "../Footer";

const Register: React.FC = () => {
  return (
    <Container>
      <Logo />

      <Form action="/success">
        <h1>Cadastro de usuários:</h1>
        <div className="inputGroup">
          <input required type="text" />
          <label htmlFor="">Nome Completo</label>
        </div>

        <div className="inputGroup">
          <input required type="password" />
          <label htmlFor="">Senha</label>
        </div>

        <div className="inputGroup">
          <input required type="password" />
          <label htmlFor="">Repita a senha</label>
        </div>

        <div className="inputGroup">
          <input required type="email" />
          <label htmlFor="">E-mail</label>
        </div>

        <div className="inputGroup">
          <input required type="email" />
          <label htmlFor="">Repita o e-mail</label>
        </div>

        <button type="submit">Registrar</button>
      </Form>

      <Footer />
    </Container>
  );
};

export default Register;
