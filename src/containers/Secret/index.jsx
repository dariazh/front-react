import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {Button} from 'reactstrap';

export default class SecretPage extends Component {
    render() {
        const {isLoggedIn, product} = this.props;

        if (isLoggedIn) {
            return (<div>
                <h1>List of all products</h1>
                {product.map((item, i) =>
                    (<div key={'prod' + i}>{item.name}</div>)
                )}
                <Link to="/"><Button variant="primary">Back Home</Button></Link>
            </div>);
        }

        return (
            <Redirect to="/login"/>
        );

    }
}