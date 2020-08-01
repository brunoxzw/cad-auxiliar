import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: -apple-system, Roboto, sans-serif;
    }

    html, body, #root {
    height: 100%;
  }

    :root {
        --primary: #23C7AC;
        --secondary: #27DEBF;
        --terciary: #1B9B86;
        --quaternary: #858585;
        --back: #FBFBFB;
    }

    body {
        background-color: var(--back);
    }

    h1 {
        font-size: 15px;
        font-weight: 500;
        color: var(--terciary);
        margin: 10px 0 10px 0;
    }

    h2 {
        font-size: 30px;
        font-weight: 300;
        color: var(--secondary);
        margin: 10px 0 10px 0;
    }

    p {
        font-size: 15px;
        font-weight: 300;
        color: var(--quaternary);
        text-align: center;
        margin: 10px 0 10px 0;
    }

    a {
        font-size: 11px;
        color: var(--secondary);
        margin:  10px 0px 10px 0px;
        transition: all 0.5s ease;
        text-decoration: none;
        

        &:hover {
            color: var(--terciary);
            text-decoration-line: underline;
        }

        &:active {
            color: var(--primary);
        }
    }

    button {
        margin: 10px 0 10px 0;
        height: 50px;
        width: 100%;
        min-width: 340px;
        border: none;
        border-radius: 4px;
        background-color: white;
        box-shadow: 2px 2px 5px -1px rgba(0,0,0,0.2);
        outline: none;
        cursor: pointer;
        grid-area: button;
        justify-self: center;
        align-self: center;
        
        font-size: 15px;
        color: var(--primary);
        transition: all 0.3s ease-out;

        :hover {
            background-color: var(--primary);
            box-shadow: 3px 3px 10px -1px rgba(0,0,0,0.2);
            color: white;
            transition: all 0s;
        }

        :active {
            background-color: var(--terciary);
            box-shadow: -3px -3px -5px -1px rgba(0,0,0,0.5);
            color: white;
            transition: all 0s;
        }

        
    }

    input {
        display: block;
        margin: 10px 0 10px 0;
        width: 100%;
        min-width: 340px;
        height: 50px;
        border: none;
        border-radius: 4px;
        border-bottom: 1px solid silver;
        box-shadow: 2px 2px 5px -1px rgba(0,0,0,0.2);
        outline: none;
        padding: 5px 15px;
        font-size: 15px;
        letter-spacing: 1px;
        color: var(--quaternary);

        &:hover, &:focus, &:valid  {
            border-bottom: 1px solid var(--primary);
        }
    }

    label {
        position: absolute;
        font-size: 13px;
        color: var(--quaternary);
        cursor: text;
        transform: translate(15px, -42px );
        transition: all 0.3s ease-in-out;
    }

    .inputGroup {
        position: relative;

        input:hover~label, input:focus~label, input:valid~label {
            transform: translate( 5px , -75px );
            font-size: 11px;
            color: var(--primary);
        }
    }
    
`;

export default GlobalStyle;
