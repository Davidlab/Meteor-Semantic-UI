import React from 'react';
import {Link} from 'react-router';
import PublicNavigation from './PublicNavigation.js';
import AuthenticatedNavigation from './AuthenticatedNavigation.js';
import {Sidebar, Menu} from 'semantic-ui-react'

const renderNavigation = hasUser => (hasUser ? <AuthenticatedNavigation /> : <PublicNavigation />);


export default class AppSidebarNavigation extends React.Component {
    state = {};

    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    render() {
        const {activeItem} = this.state;

        return (
            <Sidebar as={Menu} animation='push' width='thin' visible={this.props.isVisable} icon='labeled' vertical
                     inverted>
                <Menu.Item name="Application Name" header as={Link} to="/"/>
                <Menu.Item name='aboutUs' active={activeItem === 'aboutUs'} onClick={this.handleItemClick}/>
                <Menu.Item name='jobs' active={activeItem === 'jobs'} onClick={this.handleItemClick}/>
                <Menu.Item name='locations' active={activeItem === 'locations'} onClick={this.handleItemClick}/>
            </Sidebar>
        )
    }
}
AppSidebarNavigation.propTypes = {
    hasUser: React.PropTypes.object,
};
