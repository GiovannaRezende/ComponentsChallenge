import { Link } from 'react-router-dom';
import { Container } from '../home/styled';

export default function Produto(props) {
    return(
        <Container>
            <div><img className="capa" src={props.info.imagem} alt=""/></div>
            <div className="titulo">{props.info.titulo}</div>
            <div className="preco">{props.info.preco}</div>

            <Link to={{
                pathname: '/detalhe',
                state: props.info
            }}>
                <button>Ver detalhes</button>
            </Link>
        </Container>
    )
}
