import React from "react";
import {
  Container,
  Inputs,
  Attachments,
  TitleAttachments,
  ButtonGroup,
  Header
} from "./styles";
import Logo from "../Logo";
import Footer from "../Footer";
import Attachment from "../Attachment";
import ExitButton from "../ExitButton";

const Add: React.FC = () => {
  return (
    <Container>

<Header>
      <Logo />
        <ExitButton/>
        </Header>

      <Inputs>
        <div className="inputGroup">
          <input required type="text" />
          <label>Pergunta 1</label>
        </div>

        <div className="inputGroup">
          <input required type="text" />
          <label>Pergunta 1</label>
        </div>

        <div className="inputGroup">
          <input required type="text" />
          <label>Pergunta 1</label>
        </div>
        <div className="inputGroup">
          <input required type="text" />
          <label>Pergunta 1</label>
        </div>
        <div className="inputGroup">
          <input required type="text" />
          <label>Pergunta 1</label>
        </div>
        <div className="inputGroup">
          <input required type="text" />
          <label>Pergunta 1</label>
        </div>
        <div className="inputGroup">
          <input required type="text" />
          <label>Pergunta 1</label>
        </div>
        <div className="inputGroup">
          <input required type="text" />
          <label>Pergunta 1</label>
        </div>
        <div className="inputGroup">
          <input required type="text" />
          <label>Pergunta 1</label>
        </div>
        <div className="inputGroup">
          <input required type="text" />
          <label>Pergunta 1</label>
        </div>
        <div className="inputGroup">
          <input required type="text" />
          <label>Pergunta 1</label>
        </div>
        <div className="inputGroup">
          <input required type="text" />
          <label>Pergunta 1</label>
        </div>
      </Inputs>

      <Attachments>
        <TitleAttachments>
          <h1>Arquivos:</h1>
        </TitleAttachments>
        <Attachment desc="Nome do Arquivo.jpg" />
        <Attachment desc="Nome do Arquivo.jpg" />
        <Attachment desc="Nome do Arquivo.jpg" />
      </Attachments>

      <ButtonGroup>
        <button>Salvar</button>
      </ButtonGroup>

      <Footer />
    </Container>
  );
};

export default Add;
