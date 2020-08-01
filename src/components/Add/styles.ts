import styled from "styled-components"

export const Container = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: auto 30% ;
    grid-template-rows: 20% auto auto auto ;
    grid-template-areas: 
        "header header"
        "inputs attachments"
        "inputs ."
        "buttongroup buttongroup"
        "footer footer"
     ;
     justify-self: center;
     padding: 0% 10%;
`

export const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: inputs;
    justify-self: center;
    width: 100%;
    padding: 0px 20px 0px 0px;
    overflow: auto;
`

export const Attachments = styled.div`
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;    
    grid-area: attachments;
    overflow: auto;
    margin-left: 20px;
`

export const TitleAttachments = styled.div`
    width: 100%;
`

export const ButtonGroup = styled.div`
    display: flex;
    grid-area: buttongroup;
    justify-content: space-between ;
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    grid-area: header;
`