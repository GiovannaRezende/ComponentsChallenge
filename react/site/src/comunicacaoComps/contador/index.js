import { useState } from 'react';

export default function Pai(){
    const [qtd, setQtd] = useState(0);

    function contar () {
        setQtd(qtd+1);
    }

    function resetar () {
        setQtd(0);
    }

    return (
        <div className="container">
            <div>Contador</div>
            <h1>{qtd}</h1>
            <button onClick={contar}>Contar</button>

            <Filho onReset={resetar} qtd={qtd}/>
        </div>
    )
}

  function Filho(props) {
    function resetar() {
        props.onReset();
    }

    return (
        <div className="container">
            <button onClick={resetar}>Resetar</button>
            <div>{props.qtd}</div>
        </div>
    )
}