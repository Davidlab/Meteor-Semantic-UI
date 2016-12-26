/* eslint-disable no-undef */

import {browserHistory} from 'react-router';
import ReactDOM from 'react-dom';
import {Accounts} from 'meteor/accounts-base';
import {Bert} from 'meteor/themeteorchef:bert';

let component;
let token;

const handleReset = (fields) => {
    const password = fields.newPassword;
    Accounts.resetPassword(token, password, (error) => {
        if (error) {
            Bert.alert(error.reason, 'danger');
        } else {
            browserHistory.push('/');
            Bert.alert('Password reset!', 'success');
        }
    });
};

const validate = () => {
    //Semantic UI from validation
    $(component.resetPasswordForm)
        .form({
                fields: {
                    newPassword: {
                        identifier: 'newPassword',
                        rules: [
                            {
                                type: 'empty',
                                prompt: 'Please enter your new password'
                            },
                            {
                                type: 'minLength[6]',
                                prompt: 'Your password must be at least {ruleValue} characters'
                            }
                        ]

                    },
                    repeatNewPassword: {
                        identifier: 'repeatNewPassword',
                        rules: [
                            {
                                type: 'empty',
                                prompt: 'Repeat your new password, please.',
                            },
                            {
                                type: 'minLength[6]',
                                prompt: 'Your password must be at least {ruleValue} characters'
                            },
                            {
                                type: 'match[newPassword]',
                                prompt: 'Hmm, your passwords don\'t match. Try again?'
                            }
                        ]

                    }
                },
                onSuccess: function (event, fields) {
                    handleReset(fields);
                }
            },
        );
};

export default function handleResetPassword(options) {
    component = options.component;
    token = options.token;
    component.resetPasswordForm = ReactDOM.findDOMNode(component.refs.resetPasswordForm); //get ref to form for validation
    validate();
}
