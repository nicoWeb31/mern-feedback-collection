//surveysNerw show SurveysForm and SurveysFormRewiew

import React, { Component } from 'react';

import SurveysForm from './SurveysForm';
import SurveysFormReview from './SurveysFormReview';
import {reduxForm} from 'redux-form';


class SurveysNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showFormReview : false
        };
    }

    onSubmitCancel =()=>{
        this.setState({showFormReview: false})
    }

    onSurveySubmit=()=>{
        this.setState({showFormReview: true})
    }

    render() {
        return (
            <div>
                {
                    this.state.showFormReview ? (
                        <SurveysFormReview onCancel={this.onSubmitCancel}/>
                    ):
                    (
                        <SurveysForm onSurveySubmit={this.onSurveySubmit}/>
                    )
                }
            </div>
        );
    }
}


//reset le formumaire pas de destroyOnUnmount: false, au demontage ou suprime de form
export default reduxForm({
    form: 'formSurveys'
})(SurveysNews);
