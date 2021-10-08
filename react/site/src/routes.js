import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './home/index';
import Produto from './produto/index';
import Contador from './carrinho/contador/index';
import DetalheProduto from './detalheProduto/index';
import Conclusao from './comunicacaoComps/finalizacaoCampos/conclusao/index';
import Pedido from './comunicacaoComps/finalizacaoCampos/pedido/index';
import Carrinho from './carrinho/index';

import Comunicacao from './comunicacaoComps/contador/index';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/produto" exact={true} component={Produto} />
                <Route path="/contador" exact={true} component={Contador} />
                <Route path="/detalhe" exact={true} component={DetalheProduto} />
                <Route path="/carrinho" exact={true} component={Carrinho} />
                <Route path="/conclusao" exact={true} component={Conclusao} />
                <Route path="/pedido" exact={true} component={Pedido} />

                <Route path="/comunicacao" exact={true} component={Comunicacao} />
            </Switch>
        </BrowserRouter>
    )
}
