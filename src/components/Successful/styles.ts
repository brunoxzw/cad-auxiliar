import styled from 'styled-components'


export const Container = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: auto ;
    grid-template-rows: auto max-content max-content max-content auto max-content ;
    grid-template-areas: 
        "."
        "logo"
        "success"
        "button"
        "."
        "footer"
    ;
`
export const Success = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: var(--primary);
    font-size: 30px;
    margin: 50px 0px 50px 0px ;
    grid-area: success;
`
