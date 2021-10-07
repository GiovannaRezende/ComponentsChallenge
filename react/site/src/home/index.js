import { Container } from "./styled";
import { useState } from "react";
import Produto from '../produto';

export default function Home() {

    const [produtos, setProdutos] = useState([]);

    function listar() {
        const r = [
            {
                id: 10001,
                imagem: "https://http2.mlstatic.com/D_NQ_NP_755842-MLB47599396706_092021-O.webp",
                titulo: "Sorvete Ovomaltine",
                preço: "R$18,79",
                descrição: "Ótimo produto!",
                especificações: "Ovomaltine"
            },
            {
                id: 10002,
                imagem: "https://http2.mlstatic.com/D_NQ_NP_755842-MLB47599396706_092021-O.webp",
                titulo: "Chocolate KitKat",
                preço: "R$2,99",
                descrição: "Ótimo produto!",
                especificações: "divertido"
            },
            {
                id: 10003,
                imagem: "https://http2.mlstatic.com/D_NQ_NP_755842-MLB47599396706_092021-O.webp",
                titulo: "Ovo de Páscoa Barbie",
                preço: "R$48,99",
                descrição: "Ótimo produto!",
                especificações: "top"
            }
        ]

        setProdutos(r);
    }

return (
    <Container>
        <div className="titulo">Seja bem-vindo ao supermercado AllMarket!</div>
        <button onClick={listar}>Listar</button>
        <div className="lista-produtos">
            {produtos.map(item =>
                <Produto info={item}/>
                ) }
        </div>
    </Container>
)

}