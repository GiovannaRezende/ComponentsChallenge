import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2em;

    .capa {
        width: auto;
        height: 7em;
    }

    .titulo {
        font: 600 1.5em Roboto;
    }

    .preco {
        font: 500 1em Roboto;
        line-height: 1.5em;
    }

    .qtd {
        font: 500 1em Roboto;
    }
`

const RemoverIcon = styled.img `
    content: url('/assets/images/delete.svg');
    width: 2em;
    height: 2em;
    margin-top: .3em;
`

export { Container, RemoverIcon };