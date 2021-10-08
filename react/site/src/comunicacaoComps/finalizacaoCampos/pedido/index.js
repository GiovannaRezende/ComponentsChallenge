import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default function Conclusao(){
    const [pedido, setPedido] = useState({});

    useEffect(() => {
        setPedido({
            numero: 123,
            dataEntrega: '28/07/2004',
            cliente: 'Giovanna'
        })
    }, [])

    return(
        <div className="container">
            <h1>Confirmar sua compra</h1>

            <h3>Pedido: {pedido.numero}</h3>
            <h3>Cliente: {pedido.cliente}</h3>
            <h3>Previsão de entrega: {pedido.dataEntrega}</h3>

        <Link to={{
            pathname: '/comunicacaoComps/conclusao',
            state: pedido
        }}>

            <button>Voltar</button>
        </Link>
        </div>

    )
}