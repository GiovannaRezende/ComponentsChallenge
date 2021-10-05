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