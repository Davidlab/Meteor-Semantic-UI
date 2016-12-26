import React from 'react';
import {Link} from 'react-router';
import {Container, Form, Button, Header} from 'semantic-ui-react';

import handleLogin from '../../modules/login';

export default class Login extends React.Component {
    componentDidMount() {
        handleLogin({component: this});
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <Container text={true} className="Login">
                {/*//Semantic UI Form*/}
                <Header as='h2' dividing>Login</Header>
                <Form
                    ref="loginForm"
                    className="login-form"
                    onSubmit={ this.handleSubmit }>

                    <Form.Field>
                        <label className="control-label">Email Address</label>
                        <input type="email"
                               ref="emailAddress"
                               name="emailAddress"
                               className="form-control"
                               placeholder='Email Address'/>
                    </Form.Field>

                    <Form.Field>
                        <label className="control-label pull-left">Password</label>
                        <Link className="pull-right" to="/recover-password">Forgot Password?</Link>
                        <input type="password"
                               ref="password"
                               name="password"
                               className="form-control"
                               placeholder="Password"/>
                    </Form.Field>

                    <Button type='submit'>Submit</Button>
                    <div className="ui error message"></div>
                    <div id="successText"></div>
                </Form>

            </Container>
        );
    }
}
