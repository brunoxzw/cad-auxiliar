import React from 'react';
import { FooterBody } from "./styles"
import logo from '../../assets/logotc.svg'

const Footer: React.FC = () => {
    return (
        <FooterBody>
            <img src={logo} alt="Logo Empresa"/>
            <p>© Criado por Bruno Santos</p>
        </FooterBody>
    )
}

export default Footer;