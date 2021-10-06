import Link from 'react-router-dom';
import { Container } from '../home/styled';

export default function Produto(props) {
    return(
        <Container>
            <img class="capa" src={props.info.item} alt=""/>
            <div class="titulo">{props.info.titulo} </div>
            <div class="preco">{props.info.preco} </div>

            <Link to={{
                pathname: '/detalhe',
                state: props.info
            }}>
                <button>Ver detalhes</button>
            </Link>
        </Container>
    )
}