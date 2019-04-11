import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import LoginForm from '../../components/Form/LoginForm';

export default class LoginPage extends Component {
    submit = (event) => {
        console.log('DATA:', event);
        this.props.onLogin();
        return false;
    };

    render() {
        const {isLoggedIn} = this.props;

        if (isLoggedIn) {
            return <Redirect to="/"/>
        }
        return (<LoginForm onSubmit={this.submit}/>);
    }
}