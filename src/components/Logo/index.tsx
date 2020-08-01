import React from "react";
import { LogoBody } from "./styles";
import logoImg from "../../assets/Drawer.svg";

const Logo: React.FC = () => {
  return (
    <LogoBody>
      <img src={logoImg} alt="" />
      <h1>Cadastro Auxiliar</h1>
      <h2>de clientes</h2>
    </LogoBody>
  );
};

export default Logo;
