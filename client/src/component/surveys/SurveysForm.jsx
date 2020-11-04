import React, { Component } from 'react'
//redux form charge to connect with the store --- may be compare to connect in redux
import { Field, reduxForm } from 'redux-form';
import SurveysField from './SurveysField';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import validateEmail from '../../utils/validateEmail';
import formFields from './formFields'



//refacto pour ne pas repeter les fieds :
// const formFields = [
//     { label: 'Surveys title', name: 'title' },
//     { label: 'Subject Line', name: 'subject' },
//     { label: 'Email Body', name: 'body' },
//     { label: 'Emails List', name: 'emails' }
// ]

class SurveysForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderField() {

        //refacto avec lodash:
        return _.map(formFields, field => {
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
        //             name='recipients'
        //             component={SurveysField}
        //             label='Emails List'
        //         />
        //     </div>
        // )

    }



    render() {
        //this.props.handleSubmit provient de reduxForm
        //const { handleSubmit } = this.props

        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>

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
    // if(!values.recipients) errors.recipients = 'You must provide a emails lists';

    //utils validate email;
    errors.recipients = validateEmail(values.recipients || '')

    //refacto with lodash:
    _.each(formFields, ({ name }) => {
        if (!values[name]) {
            errors[name] = `You must provide a ${name}`
        }
    })


    return errors;
}


const surveysForm = reduxForm({
    validate: validateF,
    form: 'formSurveys',
    destroyOnUnmount: false  //garder le form en memoire
})(SurveysForm)

export default surveysForm