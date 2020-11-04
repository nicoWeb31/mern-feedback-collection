import React, { Component } from 'react'
//redux form charge to connect with the store --- may be compare to connect in redux
import { Field, reduxForm } from 'redux-form';
import SurveysField from './SurveysField';


class SurveysForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderField() {
        return (
            <div>
                <Field type='text' name='title' component={SurveysField} />
            </div>
        )

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