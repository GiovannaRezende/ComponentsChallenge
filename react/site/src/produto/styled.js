import styled from 'styled-components';

const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em;
    margin: 1em;
    box-shadow: 0px 0px 5px 1px #d5d4d6;

    .capa {
        width: 5em;
        height: 5em;
    }

    .titulo {
        font: 600 1em Roboto;
    }

    .preco {
        font: 500 .9em Roboto;
    }

    button {
        background-color: orange;
        outline: none;
        border: none;
    }
`

export { Container };