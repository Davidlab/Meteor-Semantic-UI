import React from 'react';
import {Message, Container} from 'semantic-ui-react';
const NotFound = () => (
    <Container>
     <Message warning>
         <Message.Header><strong>Error [404]</strong>: Sorry, page { window.location.pathname } does not exist.</Message.Header>
     </Message>
    </Container>
 );

export default NotFound;
