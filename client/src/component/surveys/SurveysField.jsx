//contains logic to render a single label and text input
import React from 'react';



const SurveysField = ({input,label}) => { //on destructure et on donne les props input de redux form
    //console.log(props.input)//props de field redux form
    return (
        <div>
        <label >{label}</label>
            <input {...input} />
        </div>
    );
}

export default SurveysField;