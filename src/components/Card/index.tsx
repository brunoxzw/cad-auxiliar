import React from "react";
import { Body, Info, Icon } from "./styles";
import { GrAttachment } from "react-icons/gr";

export interface Props {
  idCard?: number;
  client?: string;
  salesman?: string;
  zap?: string;
  date?: string;
  hasAttachment?: boolean;
}

const Card: React.FC<Props> = ({
  idCard,
  client,
  salesman,
  zap,
  date,
  hasAttachment,
}) => {
  return (
    <Body>
      <Icon hasAttachment={hasAttachment}>
        <GrAttachment/>
      </Icon>

      <Info>
        <strong>id:</strong>
        <p>{idCard}</p>
      </Info>

      <Info>
        <strong>Cliente:</strong>
        <p>{client}</p>
      </Info>

      <Info>
        <strong>Vendedor:</strong>
        <p>{salesman}</p>
      </Info>

      <Info>
        <strong>WhatsApp:</strong>
        <p>{zap}</p>
      </Info>

      <Info>
        <strong>Data:</strong>
        <p>{date}</p>
      </Info>
    </Body>
  );
};

export default Card;
