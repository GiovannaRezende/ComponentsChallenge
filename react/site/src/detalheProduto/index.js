import { useState } from "react";
import { Container } from "../home/styled";
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

        return(
            <Container>
                <div>
                    <Link to="/">Voltar</Link>
                    <h1>Detalhes do Produto</h1>
                    
                    <div><img src={produto.imagem} alt=""/></div>
                    <div>{produto.titulo}</div>
                    <div>{produto.preco}</div>
                </div>
                <div>
                    <h1>Descrição</h1>
                    <div>{produto.descricao}</div>

                    <h1>Especificações</h1>
                    <div>{produto.especificacoes}</div>
                    <div><button> onClick={comprar}Comprar</button></div>
                </div>
            </Container>
        )
    }
}

