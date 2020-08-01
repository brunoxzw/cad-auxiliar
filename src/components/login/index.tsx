import React, { useState } from "react";

import { Aside, Container, Footer, Welcome, LoginForm, AGroup } from "./styles";

import back from "../../assets/back.svg";
import Logo from "../Logo";
import LogoEmp from "../Footer";

import { FaUserPlus, FaKey } from "react-icons/fa";

const Login: React.FC = () => {
  const [displayWel, setdisplayWel] = useState("flex");
  const [displayLogin, setdisplayLogin] = useState("none");

  const handleClickNext = () => {
    setdisplayWel("none");
    setdisplayLogin("flex");
  };

  return (
    <Container>
      <Logo/>

      <Welcome style={{ display: displayWel }}>
        <h1>Seja bem vindo!</h1>
        <p>
          Estamos aqui para te ajudar a completar o cadastro do seu cliente e
          adicionar informações cruciais para a aprovação do crédito.
        </p>
        <button onClick={handleClickNext}>Avançar</button>
      </Welcome>

      <LoginForm action="/home" style={{ display: displayLogin }}>
        <div className="inputGroup">
          <input required name="email" type="email" />
          <label htmlFor="email">E-mail</label>
        </div>
        <div className="inputGroup">
          <input required name="password" type="password" />
          <label htmlFor="password">Senha</label>
        </div>
        <AGroup>
          <a href="/register">
            <FaUserPlus /> Sou um novo usuário
          </a>
          <a href="/recovery">
            <FaKey /> Esqueci minha senha
          </a>
        </AGroup>
        <button type="submit">Entrar</button>
      </LoginForm>

      <Aside>
        <img src={back} alt="" />
      </Aside>

      <Footer>
        <LogoEmp />
      </Footer>
    </Container>
  );
};

export default Login;
