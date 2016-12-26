import React from 'react';
import {Link} from 'react-router';
import PublicNavigation from './PublicNavigation.js';
import AuthenticatedNavigation from './AuthenticatedNavigation.js';
import {Menu} from 'semantic-ui-react'




export default class AppNavigation extends React.Component {
  state = {};

  handleItemClick = (e, {name}) => this.setState({activeItem: name});

  render() {
    const {activeItem} = this.state;

    let renderNavigation = hasUser => (
      hasUser ? <AuthenticatedNavigation activeItem={activeItem} onClick={ this.handleItemClick.bind(this)}/> : <PublicNavigation activeItem={activeItem} onClick={ this.handleItemClick.bind(this)}/>);

    return (
      <Menu stackable={false}>
        <Menu.Item onClick={this.props.toggleVisibility} className="sidebar-trigger" icon="sidebar" as="a" size="small"/>
        <Menu.Item name="application name" header as={Link} to="/"/>

        {renderNavigation(this.props.hasUser)}

      </Menu>
    )
  }
}
AppNavigation.propTypes = {
  hasUser: React.PropTypes.object,
  toggleVisibility: React.PropTypes.func
};
