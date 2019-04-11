import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button} from "reactstrap";

export default class NotFoundPage extends Component {
    render() {
        return (<div>
            <h1>404</h1>
            <p>Page not found</p>
            <Link to="/"> <Button variant="primary">Back Home</Button></Link>
        </div>);
    }
}