import styled from 'styled-components';

const Container = styled.div `
    display: flex;
    flex-direction: row;
    box-shadow: 0px 0px 5px 1px #d5d4d6;


    .capa img {
        width: 2em;
        height: 2em;
    }

    .titulo {
        font: 600 1em Roboto;
    }

    .preco {
        font: 400 .8em Roboto;
    }

    button {
        background-color: orange;
        outline: none;
        border: none;
    }
`

export { Container };