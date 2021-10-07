import styled from 'styled-components';

const Container = styled.div `
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 5px 1px #d5d4d6;


    .capa {
        border: 2px solid orange;
    }

    .titulo {
        font: 600 1em Roboto;
    }

    .preco {

    }

    button {
        background-color: orange;
        outline: none;
        border: none;
    }
`

export { Container };