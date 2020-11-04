//contains logic to render a single label and text input
import React from 'react';



const SurveysField = ({input}) => { //on destructure et on donne les props input de redux form
    //console.log(props)//props de field redux form
    return (
        <div>
            <input {...input} />
        </div>
    );
}

export default SurveysField;