import styled from 'styled-components'


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 340px;
    grid-area: form;
`

export const Container = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: auto ;
    grid-template-rows: auto max-content max-content auto max-content ;
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

