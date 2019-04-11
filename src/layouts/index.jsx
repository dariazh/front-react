import React, {PureComponent} from 'react';
import Header from '../components/Header/Header';
import SingleProduct from '../components/SingleProduct';
import HomePage from '../containers/Home';
import NotFoundPage from '../containers/NotFound';
import LoginPage from '../containers/Login';
import SecretPage from '../containers/Secret';
import ProductPage from '../containers/Product';
import ProductListTemp from '../temp/ProductList'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import 'uikit/dist/css/uikit.css';
import 'uikit/dist/css/uikit-rtl.css';
import 'uikit/dist/js/uikit-icons.min.js';
import 'uikit/dist/js/uikit.min.js';
import {Container} from 'reactstrap';

export default class Index extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false
        }
    }

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        })
    };

    render() {
        const productListItem = new ProductListTemp;
        const ProductListItem = productListItem.productListItem();
        const {isLoggedIn} = this.state;

        return (<Router>
                <Container>
                    <Header/>
                    <main className="mt-5">
                        <Switch>
                            <Route path="/" exact component={HomePage}/>
                            <Route path="/products" exact render={() => <ProductPage product={ProductListItem}/>}/>
                            <Route path="/products/:id" render={() => <SingleProduct product={ProductListItem}/>}/>
                            <Route path="/login" exact
                                   render={() => <LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin}/>}/>
                            <Route path="/secret" exact
                                   render={() => <SecretPage isLoggedIn={isLoggedIn} product={ProductListItem}/>}/>
                            <Route path="*" component={NotFoundPage}/>
                        </Switch>
                    </main>
                </Container>
            </Router>
        );
    }
}