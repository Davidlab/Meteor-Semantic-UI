import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import AppNavigation from '../containers/AppNavigation.js';
import AppSidebarNavigation from '../containers/AppSidebarNavigation.js';
import {Sidebar, Segment} from 'semantic-ui-react'

class App extends Component {
  constructor(props) {
    super(props)

    //Bind (this) to toggleVisibility method
    this.toggleVisibility = this.toggleVisibility.bind(this)

    this.state = {visible: false}
  }

  componentDidMount() {
    // Localize the selector instead of having jQuery search globally
    let rootNode = ReactDOM.findDOMNode(this);

    // Initialize the semantic-ui sidebar
    //This uses the standard Semantic-ui sidebar method
    // $(rootNode).find('.ui.sidebar').sidebar({
    //   context: $(rootNode)
    // }).sidebar('attach events', '#react-root .sidebar-trigger');

    //Non semantic-ui way to close the sidebar menu with only javascript/
    //This is because we are using the semantic-ui-react package
    //Use the above code if there are issues
    let componentThis = this;
    document.querySelector('.sidebar-trigger').onclick = function () {
      document.body.addEventListener('click', function (event) {
        if (event.srcElement.classList.contains('dimmed')) {
          componentThis.setState({visible: !componentThis.state.visible})
        }
      });
    };

  }

  toggleVisibility(e) {
    e.preventDefault()
    this.setState({visible: !this.state.visible})
  }

  render() {
    const {visible} = this.state;

    return (
      <Sidebar.Pushable as={Segment}>
        <AppSidebarNavigation isVisable={visible}/>
        <Sidebar.Pusher dimmed={visible}>
          <AppNavigation toggleVisibility={this.toggleVisibility}/>
          { this.props.children }
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
