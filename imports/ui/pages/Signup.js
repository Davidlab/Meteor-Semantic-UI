import React from 'react';
import {Link} from 'react-router';
import {Container, Form, Button, Header} from 'semantic-ui-react'
import handleSignup from '../../modules/signup';

export default class Signup extends React.Component {
    componentDidMount() {
        handleSignup({component: this});
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <Container text={true} className="Signup">
                <Header content="Sign Up" as='h2' dividing/>
                <Form
                    ref="signUpForm"
                    className="signup-form"
                    onSubmit={ this.handleSubmit }>

                    {/*First Name*/}
                    <Form.Group widths="equal">
                        <Form.Field>
                            <label className="control-label">First Name</label>
                            <input type="text"
                                   ref="firstName"
                                   name="firstName"
                                   className="form-control"
                                   placeholder='First Name'/>
                        </Form.Field>

                        {/*Last Name*/}
                        <Form.Field>
                            <label className="control-label">Last Name</label>
                            <input type="text"
                                   ref="lastName"
                                   name="lastName"
                                   className="form-control"
                                   placeholder='Last Name'/>
                        </Form.Field>
                    </Form.Group>

                    {/*Email Address*/}
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
                        <input type="password"
                               ref="password"
                               name="password"
                               className="form-control"
                               placeholder="Password"/>
                    </Form.Field>

                    <Button type='submit'>Sign Up</Button>
                    <div className="ui error message"></div>
                    <div id="successText"></div>
                </Form>
                <p>Already have an account? <Link to="/login">Log In</Link>.</p>
            </Container>
        );
    }
}
