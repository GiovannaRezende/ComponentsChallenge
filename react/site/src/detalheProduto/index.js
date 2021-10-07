import { useState } from 'react';
import { Container } from './styled';
import { Link, useHistory} from 'react-router-dom';
import Cookie from 'js-cookie';


export default function DetalheProduto(props) {
    const [produto, setProduto] = useState(props.location.state);
    const navigation = useHistory();

    function comprar() {
        let carrinho = Cookie.get('carrinho');
        carrinho = carrinho !== undefined ? JSON.parse(carrinho) : [];

        if (carrinho.some(item => item.id === produto.id) === false)
        carrinho.push({...produto, qtd: 1});

        Cookie.set('carrinho', JSON.stringify(carrinho));

        navigation.push('/carrinho');
    }
    
        return(
            <Container>
                <div>
                    <Link to="/">Voltar</Link>
                    <h1>Detalhes do Produto</h1>
                    
                    <div><img src={produto.imagem} alt=""/></div>
                    <div className="titulo">{produto.titulo}</div>
                    <div className="preco">{produto.preco}</div>
                </div>
                <div className="infos">
                    <h2>Descrição</h2>
                    <div>{produto.descricao}</div>

                    <h2>Especificações</h2>
                    <div>{produto.especificacoes}</div>
                    <div><button onClick={comprar}>Comprar</button></div>
                </div>
            </Container>
        )
}

