import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 2em;


img {
    width: 10em;
    height: 10em;
}

.preco {
    font-weight: bold;
}

.infos {
    padding: 0em 2em;
}

button {
    background-color: #FB8500;
    color: white;
    outline: none;
    border: none;
    padding: .7em 1em;
    border-radius: 1.2em;
    margin-top: .8em;
}
`

export { Container };