/* eslint-disable max-len, no-return-assign */

import React from 'react';
import {Form, Button} from 'semantic-ui-react'
import documentEditor from '../../modules/document-editor.js';


export default class DocumentEditor extends React.Component {
    componentDidMount() {
        documentEditor({component: this});
        setTimeout(() => {
            document.querySelector('[name="title"]').focus();
        }, 0);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        const {doc} = this.props;
        return (
            <Form ref="docEditForm" className="document-edit-form" onSubmit={ this.handleSubmit }>
                <Form.Field name="title" label='Title' defaultValue={ doc && doc.title } control='input'
                            placeholder='Title'/>
                <Form.TextArea name="body" label='Body' defaultValue={ doc && doc.body }
                               placeholder="Congratulations! Today is your day. You're off to Great Places! You're off and away!"
                />
                <Button content={ doc && doc._id ? 'Save Changes' : 'Add Document' } positive type='submit' />
                <Button content="Cancel" negative as="a" href={doc && doc._id ? '/documents/' + doc._id : '/documents'} color="red" type='submit'/>
                <div className="ui error message"></div>
                <div id="successText"></div>
            </Form>
        );
    }
}

DocumentEditor.propTypes = {
    doc: React.PropTypes.object,
};
