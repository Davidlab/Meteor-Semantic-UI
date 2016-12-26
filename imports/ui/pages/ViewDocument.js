import React from 'react';
import {Container, Segment, Button, Header} from 'semantic-ui-react';
import {browserHistory} from 'react-router';
import {Bert} from 'meteor/themeteorchef:bert';
import {removeDocument} from '../../api/documents/methods.js';

const handleRemove = (_id) => {
    if (confirm('Are you sure? This is permanent!')) {
        removeDocument.call({_id}, (error) => {
            if (error) {
                Bert.alert(error.reason, 'danger');
            } else {
                Bert.alert('Document deleted!', 'success');
                browserHistory.push('/documents');
            }
        });
    }
};

const ViewDocument = ({doc}) => (
    <Container className="ViewDocument" text={true}>
        <Container>
            <Button href="/documents/" basic title="Document List" icon="angle left" content="Documents List"/>
            <Button.Group className="pull-right" basic size='small'>
                <Button title="Edit Document" href={`/documents/${doc._id}/edit`} icon='edit'/>
                <Button title="Delete Document" onClick={ () => handleRemove(doc._id) } icon='delete'/>
             </Button.Group>
        </Container>

        <Segment>
            <h4>{ doc.title }</h4>
            <div>
                { doc.body }
            </div>
        </Segment>
    </Container>
);

ViewDocument.propTypes = {
    doc: React.PropTypes.object.isRequired,
};

export default ViewDocument;
