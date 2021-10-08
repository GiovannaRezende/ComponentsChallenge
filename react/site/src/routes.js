import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './home/index';
import Produto from './produto/index';
import Contador from './carrinho/contador/index';
import DetalheProduto from './detalheProduto/index';
import Comunicacao from './comunicacaoComps/contador/index';
import Carrinho from './carrinho/index';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/produto" exact={true} component={Produto} />
                <Route path="/contador" exact={true} component={Contador} />
                <Route path="/detalhe" exact={true} component={DetalheProduto} />
                <Route path="/comunicacao" exact={true} component={Comunicacao} />
                <Route path="/carrinho" exact={true} component={Carrinho} />
            </Switch>
        </BrowserRouter>
    )
}
