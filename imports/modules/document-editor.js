/* eslint-disable no-undef */

import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';
import {Bert} from 'meteor/themeteorchef:bert';
import {upsertDocument} from '../api/documents/methods.js';
import './validation.js';

let component;

const handleUpsert = (fields) => {
    const {doc} = component.props;
    const confirmation = doc && doc._id ? 'Document updated!' : 'Document added!';
    const upsert = {
        title: fields.title,
        body: fields.body,
    };

    if (doc && doc._id) upsert._id = doc._id;

    upsertDocument.call(upsert, (error, {insertedId}) => {
        if (error) {
            Bert.alert(error.reason, 'danger');
        } else {
            component.docForm.reset();
            Bert.alert(confirmation, 'success');
            browserHistory.push(`/documents/${insertedId || doc._id}`);
        }
    });
};

const validate = () => {
     //Semantic UI from validation
    $(component.docForm).form({
            fields: {
                title: {
                    identifier: 'title',
                    rules: [
                        {
                            type: 'empty',
                            prompt: 'You need a title, please'
                        }
                    ]
                }, body: {
                    identifier: 'body',
                    rules: [
                        {
                            type: 'empty',
                            prompt: 'You need a body, please'
                        }
                    ]
                }

            },
            onSuccess: (event, fields) => {
                handleUpsert(fields);
            }
        },
    )
    ;
};

export default function documentEditor(options) {
    component = options.component;
    component.docForm = ReactDOM.findDOMNode(component.refs.docEditForm); //get ref to form for validation
    validate();
}
