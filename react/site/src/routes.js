import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './home/index';
import Produto from './produto/index';
import CarrinhoItem from './carrinho/carrinhoItem/index';
import Contador from './carrinho/contador/index';
import DetalheProduto from './detalheProduto/index';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/produto" exact={true} component={Produto} />
                <Route path="/carrinho-item" exact={true} component={CarrinhoItem} />
                <Route path="/contador" exact={true} component={Contador} />
                <Route path="/detalhe" exact={true} component={DetalheProduto} />
            </Switch>
        </BrowserRouter>
    )
}
