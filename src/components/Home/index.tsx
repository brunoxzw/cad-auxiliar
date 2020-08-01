import React from "react";
import { Container, CardGroup, Exit, ButtonGroup } from "./styles";
import Card from "../Card";
import Logo from "../Logo";
import Footer from "../Footer";
import { FaPlus } from "react-icons/fa";
import ExitButton from "../ExitButton";

const Home: React.FC = () => {
  return (
    <Container>
      <Logo />

      <ExitButton />

      <CardGroup>
        <Card
          idCard={1}
          client="Bruno dos Santos Gomes"
          salesman="Márcio Pipoca"
          zap="(38) 99999-4466"
          date="18/07/2020"
          hasAttachment
        />

        <Card
          idCard={2}
          client="Pedro Henrrique Souto"
          salesman="Márcio Pipoca"
          zap="(38) 99999-4478"
          date="18/07/2020"
        />

        <Card
          idCard={2}
          client="Pedro Henrrique Souto"
          salesman="Márcio Pipoca"
          zap="(38) 99999-4478"
          date="18/07/2020"
        />

        <Card
          idCard={2}
          client="Pedro Henrrique Souto"
          salesman="Márcio Pipoca"
          zap="(38) 99999-4478"
          date="18/07/2020"
          hasAttachment
        />

        <Card
          idCard={2}
          client="Pedro Henrrique Souto"
          salesman="Márcio Pipoca"
          zap="(38) 99999-4478"
          date="18/07/2020"
        />

        <Card
          idCard={1}
          client="Bruno dos Santos Gomes"
          salesman="Márcio Pipoca"
          zap="(38) 99999-4466"
          date="18/07/2020"
          hasAttachment
        />

        <Card
          idCard={2}
          client="Pedro Henrrique Souto"
          salesman="Márcio Pipoca"
          zap="(38) 99999-4478"
          date="18/07/2020"
        />

        <Card
          idCard={2}
          client="Pedro Henrrique Souto"
          salesman="Márcio Pipoca"
          zap="(38) 99999-4478"
          date="18/07/2020"
        />

        <Card
          idCard={2}
          client="Pedro Henrrique Souto"
          salesman="Márcio Pipoca"
          zap="(38) 99999-4478"
          date="18/07/2020"
          hasAttachment
        />

        <Card
          idCard={2}
          client="Pedro Henrrique Souto"
          salesman="Márcio Pipoca"
          zap="(38) 99999-4478"
          date="18/07/2020"
        />

        <Card
          idCard={1}
          client="Bruno dos Santos Gomes"
          salesman="Márcio Pipoca"
          zap="(38) 99999-4466"
          date="18/07/2020"
          hasAttachment
        />

        <Card
          idCard={2}
          client="Pedro Henrrique Souto"
          salesman="Márcio Pipoca"
          zap="(38) 99999-4478"
          date="18/07/2020"
        />

        <Card
          idCard={2}
          client="Pedro Henrrique Souto"
          salesman="Márcio Pipoca"
          zap="(38) 99999-4478"
          date="18/07/2020"
        />

        <Card
          idCard={2}
          client="Pedro Henrrique Souto"
          salesman="Márcio Pipoca"
          zap="(38) 99999-4478"
          date="18/07/2020"
          hasAttachment
        />

        <Card
          idCard={2}
          client="Pedro Henrrique Souto"
          salesman="Márcio Pipoca"
          zap="(38) 99999-4478"
          date="18/07/2020"
        />
      </CardGroup>

      <ButtonGroup>
        <FaPlus />
        <strong> Adicionar</strong>
      </ButtonGroup>

      <Footer />
    </Container>
  );
};

export default Home;
