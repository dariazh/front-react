import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Cart from '../../components/Cart';
import {NavLink as RRNavLink} from 'react-router-dom';
import { Navbar, Nav, NavItem, NavLink, Badge, Row, Col } from 'reactstrap';

class Header extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            visualState: false
        };
        this.cartClick.bind(this);
    }

    cartClick = (e) => {
        e.preventDefault();

        const currentVisualState = this.state.visualState;
        this.setState({visualState: !currentVisualState})
    };

    render() {
        return (
            <Row>
                <Col>
                    <Navbar color="light" light expand="md">
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink to="/" tag={RRNavLink} activeClassName="active" exact path="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/products" tag={RRNavLink} activeClassName="active">Products</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/login" tag={RRNavLink} activeClassName="active">Login</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/secret" tag={RRNavLink} activeClassName="active">Secret</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={this.cartClick} active
                                         className={this.state.visualState ? 'cart-menu open' : 'cart-menu'}>
                                    <span>🛒<span role="img"></span>{!!this.props.itemCount && <Badge color="info">{this.props.itemCount}</Badge>}
                                    <Cart />
                                    </span>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Navbar>
                </Col>
            </Row>
        );
    }
}

export default connect(store => ({
    itemCount: store.cart.items.length
}))(Header);