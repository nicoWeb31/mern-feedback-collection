import React from 'react'


const SurveysFormReview = ({ onCancel }) => {
    return (
        <div>
            <h5>Please confirme your entries !</h5>
            <button className="darken-3 btn-flat yellow"
                onClick={onCancel}
            >
                BACK
        </button>
        </div>
    );
}

export default SurveysFormReview;