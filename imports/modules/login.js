/* eslint-disable no-undef */

import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';
import {Meteor} from 'meteor/meteor';
import {Bert} from 'meteor/themeteorchef:bert';

let component;

const login = (fields) => {
    const email = fields.emailAddress;
    const password = fields.password;
    Meteor.loginWithPassword(email, password, (error) => {
        if (error) {
            Bert.alert(error.reason, 'warning');
        } else {
            Bert.alert('Logged in!', 'success');
            const {location} = component.props;
            if (location.state && location.state.nextPathname) {
                browserHistory.push(location.state.nextPathname);
            } else {
                browserHistory.push('/');
            }
        }
    });
};


//Semantic UI notification example. Using Bert instead.
//  const submitNotification = (fields) => {
//   var valid = $(".ui.form").form('is valid');
//   $('#successText').html("On Success Called" + "<br> Is Valid: " + valid);
//   console.log("Submitting Form");
//   console.log(fields);
// }

const validate = () => {

    //Semantic UI from validation
    $(component.loginForm)
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
                onSuccess: function (event, fields) {
                    login(fields);
                }
            },
        )
    ;

};

export default function handleLogin(options) {
    component = options.component;
    component.loginForm = ReactDOM.findDOMNode(component.refs.loginForm); //get ref to form for validation
    validate();
}
