import { useEffect, useState } from "react";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;


  & > * {

  }

  .menos {

  }

  .quantidade {

  }

  .mais {

  }
`

export default function Contador(props) {
    const [qtd, setQtd] = useState(props.value);

    function incrementar() {
        if(qtd >= 10)
        return;
        setQtd(qtd+1)
    }

    function descrementar() {
        if(qtd === 0)
        return;
        setQtd(qtd-1)
    }

    useEffect(() => {
        props.onChange(qtd);

    }, [qtd])

    return (
        <Container>
            <div className="menos" onClick={descrementar}> - </div>
            <div className="quantidade">{qtd}</div>
            <div className="mais" onClick={incrementar}> + </div>
        </Container>
    )
}