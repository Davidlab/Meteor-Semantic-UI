import React from 'react';
import DocumentEditor from '../components/DocumentEditor.js';
import {Container, Header} from 'semantic-ui-react';

const EditDocument = ({ doc }) => (
  <Container>
  <div className="EditDocument">
    <Header content={`Editing ${doc.title}`} as='h3'/>
    <DocumentEditor doc={ doc } />
  </div>
  </Container>
);

EditDocument.propTypes = {
  doc: React.PropTypes.object,
};

export default EditDocument;
