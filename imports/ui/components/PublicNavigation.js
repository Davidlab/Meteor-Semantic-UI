import React from 'react';
// import {LinkContainer} from 'react-router-bootstrap';
import {Link} from 'react-router';
import {Menu, Button} from 'semantic-ui-react'

const PublicNavigation = (props) => (

    <Menu.Menu position='right'>
        <Menu.Item as={Link} to="/signup" name='signup' active={props.activeItem === 'signup'} onClick={props.onClick}>
            <Button primary>Sign up</Button>
        </Menu.Item>
        <Menu.Item as={Link} to="/login" name='login' active={props.activeItem === 'login'} onClick={props.onClick}>
            <Button secondary>Login</Button>
        </Menu.Item>
    </Menu.Menu>
);

export default PublicNavigation;
