import React from 'react';
import {Header, Container} from 'semantic-ui-react';
import DocumentEditor from '../components/DocumentEditor.js';

const NewDocument = () => (
  <Container>
  <Header content="New Document" as="h3" className="NewDocument"/>
  <DocumentEditor />
  </Container>
);

export default NewDocument;
