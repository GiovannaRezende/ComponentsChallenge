import styled from 'styled-components'


const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    .titulo {
        font: 700 2em Roboto;
        color: black;
        margin-bottom: 1.5em;
    }

    button {
        background-color: #FB8500;
        color: white;
        outline: none;
        border: none;
        padding: .7em 1em;
        border-radius: 1.2em;
    }

    .lista-produtos {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
`

export { Container }