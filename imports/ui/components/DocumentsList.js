import React from 'react';
import {Message, List} from 'semantic-ui-react'

const DocumentsList = ({documents}) => (
    documents.length > 0 ?
        <List link selection verticalAlign='middle'>
            {documents.map(({_id, title}) => (
                <List.Item key={ _id } href={`/documents/${_id}`}>{ title }</List.Item>
            ))}
        </List>
        :
        <Message warning header='No documents yet' content='Please create your first document'/>
);

DocumentsList.propTypes = {
    documents: React.PropTypes.array,
};

export default DocumentsList;
