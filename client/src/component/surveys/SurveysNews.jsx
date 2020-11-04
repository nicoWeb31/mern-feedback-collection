//class parent pour formredux -- store implement here
//formRedux here
//on entour ici tout ce que l'on a besoin de redux-from, pas besoin de vrapp app.
//surveysNerw show SurveysForm and SurveysFormRewiew

import React, { Component } from 'react';

import SurveysForm from './SurveysForm';
import SurveysFormReview from './SurveysFormReview';


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

export default SurveysNews;
