import React from 'react';
// import { Grid } from 'react-bootstrap';
import AppNavigation from '../containers/AppNavigation.js';
import { Container } from 'semantic-ui-react';

const App = ({ children }) => (
  <div>
    {/*<AppNavigation />*/}
    <Container>
      { children }
    </Container>
  </div>
);

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
