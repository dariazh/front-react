import React, { PureComponent } from 'react';
import { Alert, FormGroup, Label, Input } from 'reactstrap';

export default class LineInput extends PureComponent {

    render() {
        const { className, label, input, type, meta: { touched, error, warning } } = this.props;
        const classes = className + ' uk-' + type + (touched ? ' uk-form-' + (error ? 'danger' : 'success') : '');

        return (<FormGroup className="mt-2 mb-2">
            {label && <Label>{ label }</Label>}
                <Input { ...input } placeholder={ label } type={ type } className={ classes }/>
                {touched &&
                ((error && <Alert color="danger">{error}</Alert>) ||
                    (warning && <Alert color="warning">{warning}</Alert>))
                }
        </FormGroup>);
    }
}