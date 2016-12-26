import React from 'react';
import {browserHistory} from 'react-router';
import {Container, Header, Button, Segment} from 'semantic-ui-react';
import DocumentsList from '../containers/DocumentsList.js';

const Documents = () => (

    <Container text={true} className="Documents">
        <Segment padded clearing vertical>
            <Header content="Documents" as='h3' floated='left'/>
            <Header as='h3' floated='right'>
                <Button color='green' onClick={() => {
                    browserHistory.push('/documents/new')}}>New Document</Button>
            </Header>
        </Segment>
        <DocumentsList />
    </Container>
);

export default Documents;
