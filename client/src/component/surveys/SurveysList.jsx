import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllSurvey } from '../../actions/index';


class SurveysList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.fetchAllSurvey();
    }

    renderSurveys() {
        return this.props.surveys.reverse().map(survey => {//reverse changer lordre du tableau
            return (
                <div key={survey._id} className="card darken-1">
                    <div className="card-content">
                        <span className="card-title">
                            {survey.title}
                        </span>
                        <p>{survey.body}</p>
                        <p className="right">
                            Sent One: {survey.dateSent}
                        </p>
                    </div>
                    <div className="card-action">
                        <a> yes : {survey.yes}</a>
                        <a> no : {survey.no}</a>

                    </div>

                </div>
            )
        })
    }


    render() {
        return (
            <div>
                { this.renderSurveys()}

            </div>
        );
    }
}


const mapStateToProps = ({ surveys }) => {
    return {
        surveys
    }
}
export default connect(mapStateToProps, { fetchAllSurvey })(SurveysList);