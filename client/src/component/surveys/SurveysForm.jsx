import React, { Component } from 'react'
//redux form charge to connect with the store --- may be compare to connect in redux
import {Field,reduxForm} from 'redux-form'

class SurveysForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        //this.props.handleSubmit provient de reduxForm
        const { handleSubmit } = this.props

        return (
            <div>
            <form onSubmit={handleSubmit(values=>console.log(values))}>

                    <Field
                        name="firstName"
                        component="input"
                        type="text"
                        placeholder="First Name"
                        
                        
                    />
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