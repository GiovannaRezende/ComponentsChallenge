import { Container } from "./styled"
import { useState } from "react"

export default function Home() {

    const [produtos, setProdutos] = useState([]);

    function listar() {
        const r = [
            {
                id: 10001,
                imagem: "",
                titulo: "",
                preço: "",
                descrição: "",
                especificações: ""
            },
            {
                id: 10001,
                imagem: "",
                titulo: "",
                preço: "",
                descrição: "",
                especificações: ""
            },
            {
                id: 10001,
                imagem: "",
                titulo: "",
                preço: "",
                descrição: "",
                especificações: ""
            }
        ]

        setProdutos(r);
    }

return (
    <Container>
        <div clas="titulo">Seja bem-vindo ao supermercado AllMarket!</div>
        <button>onClick={listar} Listar </button>
        <div class="lista-produtos">
            {produtos.map(item =>
                <Produto  info={item}/>
                ) }
        </div>
    </Container>
)

}