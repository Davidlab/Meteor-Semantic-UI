/* eslint-disable no-undef */
import ReactDOM from 'react-dom';
import {Accounts} from 'meteor/accounts-base';
import {Bert} from 'meteor/themeteorchef:bert';

let component;

const handleRecovery = (fields) => {
    Accounts.forgotPassword({
        email: fields.emailAddress,
    }, (error) => {
        if (error) {
            Bert.alert(error.reason, 'warning');
        } else {
            Bert.alert('Check your inbox for a reset link!', 'success');
        }
    });
};

const validate = () => {
    //Semantic UI from validation
    $(component.recoverPassword)
        .form({
                fields: {
                    emailAddress: {
                        identifier: 'emailAddress',
                        rules: [
                            {
                                type: 'empty',
                                prompt: 'Please enter your email'
                            }
                        ]
                    }
                },
                onSuccess: function (event, fields) {
                    handleRecovery(fields);
                }
            },
        )
    ;
};

export default function handleRecoverPassword(options) {
    component = options.component;
    component.recoverPassword = ReactDOM.findDOMNode(component.refs.recoverPassword); //get ref to form for validation
    validate();
}
