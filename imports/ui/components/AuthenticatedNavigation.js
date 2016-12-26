import React from 'react';
import {Link, browserHistory} from 'react-router';
import {Menu, Dropdown} from 'semantic-ui-react'
import {Meteor} from 'meteor/meteor';

const handleLogout = () => Meteor.logout(() => browserHistory.push('/login'));

const userName = () => {
    const user = Meteor.user();
    const name = user && user.profile ? user.profile.name : '';
    return user ? `${name.first} ${name.last}` : '';
};

const AuthenticatedNavigation = (props) => (

    <Menu.Menu position='right'>
        <Menu.Item as={Link} to="/documents" name='Documents' active={props.activeItem === 'documents'} onClick={props.onClick}/>
        <Menu.Item as={Dropdown} text={userName()}>
            <Dropdown.Menu>
                <Dropdown.Item text="Admin" as={Link} to="/admin"/>
                <Dropdown.Item text="Settings" as={Link} to="/settings"/>
                <Dropdown.Item text="Items" as={Link} to="/items"/>
                <Dropdown.Item text="Logout" as={Link} to="/logout" onClick={handleLogout}/>
            </Dropdown.Menu>
        </Menu.Item>
    </Menu.Menu>
);

export default AuthenticatedNavigation;
