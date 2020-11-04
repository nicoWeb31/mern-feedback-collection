import React, { Component } from 'react'
//redux form charge to connect with the store --- may be compare to connect in redux
import { Field, reduxForm } from 'redux-form';
import SurveysField from './SurveysField';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import validateEmail from '../../utils/validateEmail';


//refacto pour ne pas repeter les fieds :
const FIELDS = [
    { label: 'Surveys title', name: 'title' },
    { label: 'Subject Line', name: 'subject' },
    { label: 'Email Body', name: 'body' },
    { label: 'Emails List', name: 'emails' }


]

class SurveysForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderField() {

        //refacto avec lodash:
        return _.map(FIELDS, field => {
            return <Field
                type='text'
                name={field.name}
                component={SurveysField}
                label={field.label}
                key={field.name}
            />
        })

        // return (
        //     <div>
        //         <Field
        //             type='text'
        //             name='title'
        //             component={SurveysField}
        //             label='Surveys title'
        //         />

        //         <Field
        //             type='text'
        //             name='subject'
        //             component={SurveysField}
        //             label='Subject Line'
        //         />

        //         <Field
        //             type='text'
        //             name='body'
        //             component={SurveysField}
        //             label='Email Body'
        //         />

        //         <Field
        //             type='text'
        //             name='emails'
        //             component={SurveysField}
        //             label='Emails List'
        //         />
        //     </div>
        // )

    }


    render() {
        //this.props.handleSubmit provient de reduxForm
        const { handleSubmit } = this.props

        return (
            <div>
                <form onSubmit={handleSubmit(values => console.log(values))}>

                    {this.renderField()}

                    <Link to='/surveys' className="red btn-flat white-text">
                        Cancel
                    </Link>
                    <button type='submit' className="teal btn-flat right white-text">
                        Next
                    <i className="material-icons right">done</i>
                    </button>

                </form>

            </div>

        );
    }
}

const validateF = (values) => {
    const errors = {};

    // if(!values.title) errors.title = 'You must provide a title';
    // if(!values.subject) errors.subject = 'You must provide a subject';
    // if(!values.body) errors.body = 'You must provide a body';
    // if(!values.emails) errors.emails = 'You must provide a emails lists';

    //utils validate email;
    errors.emails = validateEmail(values.emails || '')

    //refacto with lodash:
    _.each(FIELDS, ({ name }) => {
        if (!values[name]) {
            errors[name] = `You must provide a ${name}`
        }
    })


    return errors;
}


const surveysForm = reduxForm({
    validate: validateF,
    // a unique name for the form
    form: 'formSurveys'
})(SurveysForm)

export default surveysForm