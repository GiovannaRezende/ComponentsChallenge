import { Container } from "./styled";
import { useState } from "react";
import Produto from '../produto';

export default function Home() {

    const [produtos, setProdutos] = useState([]);

    function listar() {
        const r = [
            {
                id: 10001,
                imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjE1ISprg52wmiMBUfUl4kysmQ2_RIUyF3Ag&usqp=CAU",
                titulo: "Sorvete Ovomaltine",
                preco: "R$18,79",
                descricao: "SORV OVOMALTINE KIBON 800ML",
                especificacoes: "Nenhuma"
            },
            {
                id: 10002,
                imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLJJpKxUin4f336ePxfPfQgGI8iakciml4Lw&usqp=CAU",
                titulo: "Chocolate Hershey's",
                preco: "R$4,99",
                descricao: "Ótimo produto!",
                especificacoes: "Nenhuma"
            },
            {
                id: 10003,
                imagem: "https://s.cornershopapp.com/product-images/3251668.jpg?versionId=NKkrVz5.5EbC724CKVb1dO2RMNp2YzBk",
                titulo: "Ovo de Páscoa Barbie",
                preco: "R$48,99",
                descricao: "Ótimo produto!",
                especificacoes: "Nenhuma"
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