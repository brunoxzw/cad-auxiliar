import React from "react"
import { Body } from "./styles"
import { FaTimes } from "react-icons/fa"

export interface Props {
    desc?: string;
}

const Attachment : React.FC<Props> = ({desc}) => {
    return (
        <Body>
            <small>{desc}</small>
            <FaTimes size="12px" />
        </Body>
    )
}

export default Attachment;