import React from 'react';
import handleResetPassword from '../../modules/reset-password';
import {Container, Form, Button, Header, Message} from 'semantic-ui-react';


export default class ResetPassword extends React.Component {
    componentDidMount() {
        handleResetPassword({component: this, token: this.props.params.token});
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <Container text={true} className="ResetPassword">
                <Header content="Reset Password" as="h3"/>
                <Message warning>
                    To reset your password, enter a new one below. You will be logged in
                    with your new password.
                </Message>
                <Form
                    ref="resetPasswordForm"
                    className="reset-password"
                    onSubmit={ this.handleSubmit }
                >
                    <Form.Field>
                        <label>New Password</label>
                        <input
                            type="password"
                            ref="newPassword"
                            name="newPassword"
                            placeholder="New Password"
                        />
                    </Form.Field>

                    <Form.Field>
                        <label>Repeat New Password</label>
                        <input
                            type="password"
                            ref="repeatNewPassword"
                            name="repeatNewPassword"
                            placeholder="Repeat New Password"
                        />
                    </Form.Field>

                    <Button type="submit">Reset Password &amp; Login</Button>
                    <div className="ui error message"></div>
                    <div id="successText"></div>
                </Form>
            </Container>
        );
    }
}

ResetPassword.propTypes = {
    params: React.PropTypes.object,
};
