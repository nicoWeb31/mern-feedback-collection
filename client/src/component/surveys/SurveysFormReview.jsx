import React from 'react';
import { connect } from 'react-redux'; //recup values du formulaire
import formFields from './formFields';
import _ from 'lodash';
import { submitSurvey } from '../../actions/index'


const SurveysFormReview = ({ onCancel, formValues,submitSurvey }) => {


    const rewiewsFields = _.map(formFields, field => {
        return (
            <div key={field.name}>
                <label>{field.label}</label>
                <div>
                    {formValues[field.name]}
                </div>
            </div>
        )
    })


    return (
        <div>
            <h5>Please confirme your entries !</h5>
            {/* <div>
                <label >Survey Title</label>
                <div>{title}</div>
            </div>

            <div>
                <label>Subject Line</label>
                <div>{subject}</div>
            </div> */}

            {/* refacto : */}
            {rewiewsFields}


            <button className="darken-3 btn-flat yellow"
                onClick={onCancel}
            >
                BACK
            </button>
            <button className="green btn-flat right"
            onClick={()=>submitSurvey(formValues)}
            >
                Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    );
}


const mapStateTopProps = state => {
    return {
        formValues: state.form.formSurveys.values   //form, noms du formulaire, values le tout dans le reducer
    }
}
export default connect(mapStateTopProps,{submitSurvey})(SurveysFormReview);