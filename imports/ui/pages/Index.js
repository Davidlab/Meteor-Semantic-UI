import React from 'react';
import {Container, Segment, Header} from 'semantic-ui-react'

const Index = () => (

        <Container>
            <Segment inverted={true} textAlign="center">
            <Header content="Base" inverted={true} as='h3'/>
            <p>A starting point for Meteor applications.</p>
            <p>
                <a className="btn btn-success" href="https://themeteorchef.com/base" role="button">Read the
                    Documentation</a>
            </p>
            <p style={ {fontSize: '16px', color: '#aaa'} }>Currently at v4.10.0</p>
            </Segment>
        </Container>

);

export default Index;
