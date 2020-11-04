import React, { Component } from 'react'
//redux form charge to connect with the store --- may be compare to connect in redux
import { Field, reduxForm } from 'redux-form';
import SurveysField from './SurveysField';
import _ from 'lodash';


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
        return _.map(FIELDS,field => {
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
                    <button type='submit'>submit</button>
                </form>

            </div>

        );
    }
}


const surveysForm = reduxForm({
    // a unique name for the form
    form: 'formSurveys'
})(SurveysForm)

export default surveysForm