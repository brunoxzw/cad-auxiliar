import React from "react";
import { Container, Success } from "./styles";
import { FaRegCheckCircle } from "react-icons/fa";
import Logo from "../Logo";
import Footer from "../Footer";
import {  } from "react-router"

const Successful: React.FC = () => {
  return (
    <Container>
      <Logo />

      <Success>
        <FaRegCheckCircle />
        <p>Concluído com Sucesso!</p>
      </Success>
    
      <button>Voltar para o Início</button>

      <Footer />
    </Container>
  );
};

export default Successful;
