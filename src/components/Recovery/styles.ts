import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    display:grid;
    grid-template-columns: auto;
    grid-template-rows: auto max-content max-content auto max-content;
    grid-template-areas: 
    "."
    "logo"
    "form"
    "."
    "footer"
    ;
    justify-content: center;
    align-items: center;
`

export const RecGroup = styled.div`
    align-items: initial;
    width: 340px;

    P {
        text-align: initial;
    }
`

export const RecForm = styled.form`
    display: flex;
    flex-direction: column;
    grid-area: form;

`