import React from 'react';
import handleRecoverPassword from '../../modules/recover-password';
import {Container, Form, Button, Header, Message} from 'semantic-ui-react';

export default class RecoverPassword extends React.Component {
    componentDidMount() {
        handleRecoverPassword({ component: this });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <Container text={true} className="RecoverPassword">
                {/*//Semantic UI Form*/}
                <Header content='Recover Password' as='h3' dividing/>
                <Message warning>
                    Enter your email address below to receive a link to reset your password.
                </Message>
                <Form
                    ref="recoverPassword"
                    className="recover-password"
                    onSubmit={ this.handleSubmit }>

                    <Form.Field>
                        <label className="control-label">Email Address</label>
                        <input type="email"
                               ref="emailAddress"
                               name="emailAddress"
                               className="form-control"
                               placeholder='Email Address'/>
                    </Form.Field>

                    <Button type='submit'>Recover Password</Button>
                    <div className="ui error message"></div>
                    <div id="successText"></div>
                </Form>
            </Container>
        );
    }
}
