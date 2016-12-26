/* eslint-disable no-undef */

import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';
import {Accounts} from 'meteor/accounts-base';
import {Bert} from 'meteor/themeteorchef:bert';

let component;

const getUserData = (fields) => ({
    email: fields.emailAddress,
    password: fields.password,
    profile: {
        name: {
            first: fields.firstName,
            last: fields.lastName,
        },
    },
});

const signup = (fields) => {
    const user = getUserData(fields);

    Accounts.createUser(user, (error) => {
        if (error) {
            Bert.alert(error.reason, 'danger');
        } else {
            browserHistory.push('/');
            Bert.alert('Welcome!', 'success');
        }
    });
};

const validate = () => {
    //Semantic UI form validation
    $(component.signUpForm).form({
            fields: {
                firstName: {
                    identifier: 'firstName',
                    rules: [
                        {
                            type: 'empty',
                            prompt: 'Please enter your first name'
                        }
                    ]
                }, lastName: {
                    identifier: 'lastName',
                    rules: [
                        {
                            type: 'empty',
                            prompt: 'Please enter your last name'
                        }
                    ]
                }, emailAddress: {
                    identifier: 'emailAddress',
                    rules: [
                        {
                            type: 'empty',
                            prompt: 'Please enter your last name'
                        }
                    ]
                },
                password: {
                    identifier: 'password',
                    rules: [
                        {
                            type: 'empty',
                            prompt: 'Please enter a password'
                        },
                        {
                            type: 'minLength[6]',
                            prompt: 'Your password must be at least {ruleValue} characters'
                        }
                    ]

                }
            },
            onSuccess: (events, fields) => {
                signup(fields);
            }
        },
    )
    ;
};

export default function handleSignup(options) {
    component = options.component;
    component.signUpForm = ReactDOM.findDOMNode(component.refs.signUpForm); //get ref to form for validation
    validate();
}
