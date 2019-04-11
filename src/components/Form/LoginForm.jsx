import React, { PureComponent } from 'react';
import LineInput from './LineInput';
import { reduxForm, Field } from 'redux-form';
import { Alert } from 'reactstrap';



const required = value => value ? undefined : 'Should be filled';

class LoginForm extends PureComponent {

    render() {
        const { handleSubmit, invalid } = this.props;

        return (<form onSubmit={ handleSubmit }>
            {invalid && <Alert color="danger">You must fill out the form!</Alert>}
            <Field
                name="name"
                label="Name"
                type="text"
                component={LineInput}
                className="uk-input"
                validate={ required }
            />
            <Field
                name="email"
                label="Email"
                type="email"
                component={LineInput}
                className="uk-input"
            />
            <Field
                name="password"
                label="Password"
                type="password"
                component={LineInput}
                className="uk-input"
            />
            <div className="uk-margin">
                <button className="uk-button uk-button-primary" disabled={invalid}>Send</button>
            </div>
        </form>);
    }
}

export default reduxForm({
    form: 'login',
})(LoginForm);