//class parent pour formredux -- store implement here
//formRedux here
//on entour ici tout ce que l'on a besoin de redux-from, pas besoin de vrapp app.
//surveysNerw show SurveysForm and SurveysFormRewiew

import React, { Component } from 'react';

import SurveysForm from './SurveysForm';

class SurveysNews extends Component{
    render(){
        return(
            <div>
                <SurveysForm/>
            </div>
        )
    }
}

export default SurveysNews;