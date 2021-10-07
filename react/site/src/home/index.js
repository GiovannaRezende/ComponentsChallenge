import { Container } from "./styled";
import { useState } from "react";
import Produto from '../produto';

export default function Home() {

    const [produtos, setProdutos] = useState([]);

    function listar() {
        const r = [
            {
                id: 10001,
                imagem: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatics.angeloni.com.br%2Fsuper%2Ffiles%2Fprodutos%2F4234625%2F4234625_1_zoom.jpg&imgrefurl=https%3A%2F%2Fwww.angeloni.com.br%2Fsuper%2Fp%2Fsorvete-kibon-ovomaltine-800ml-4234625&tbnid=2yTKLtb_0BUW4M&vet=12ahUKEwiQmfewzbTzAhWzLrkGHcG9B2QQMygCegUIARDBAQ..i&docid=_2v3l3L40EmrTM&w=1000&h=1000&q=sorvete%20ovomaltine&ved=2ahUKEwiQmfewzbTzAhWzLrkGHcG9B2QQMygCegUIARDBAQ",
                titulo: "Sorvete Ovomaltine",
                preço: "R$18,79",
                descrição: "Ótimo produto!",
                especificações: "Ovomaltine"
            },
            {
                id: 10002,
                imagem: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatics.angeloni.com.br%2Fsuper%2Ffiles%2Fprodutos%2F4234625%2F4234625_1_zoom.jpg&imgrefurl=https%3A%2F%2Fwww.angeloni.com.br%2Fsuper%2Fp%2Fsorvete-kibon-ovomaltine-800ml-4234625&tbnid=2yTKLtb_0BUW4M&vet=12ahUKEwiQmfewzbTzAhWzLrkGHcG9B2QQMygCegUIARDBAQ..i&docid=_2v3l3L40EmrTM&w=1000&h=1000&q=sorvete%20ovomaltine&ved=2ahUKEwiQmfewzbTzAhWzLrkGHcG9B2QQMygCegUIARDBAQ",
                titulo: "Chocolate KitKat",
                preço: "R$2,99",
                descrição: "Ótimo produto!",
                especificações: "divertido"
            },
            {
                id: 10003,
                imagem: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatics.angeloni.com.br%2Fsuper%2Ffiles%2Fprodutos%2F4234625%2F4234625_1_zoom.jpg&imgrefurl=https%3A%2F%2Fwww.angeloni.com.br%2Fsuper%2Fp%2Fsorvete-kibon-ovomaltine-800ml-4234625&tbnid=2yTKLtb_0BUW4M&vet=12ahUKEwiQmfewzbTzAhWzLrkGHcG9B2QQMygCegUIARDBAQ..i&docid=_2v3l3L40EmrTM&w=1000&h=1000&q=sorvete%20ovomaltine&ved=2ahUKEwiQmfewzbTzAhWzLrkGHcG9B2QQMygCegUIARDBAQ",
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