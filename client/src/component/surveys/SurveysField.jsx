//contains logic to render a single label and text input
import React from 'react';



const SurveysField = ({input,label,meta:{error,touched}}) => { //on destructure et on donne les props input de redux form
    //console.log(props.input)//props de field redux form
    //console.log(meta)//meta pour recuperer les erreurs de valodation, ainsi que tuched,clicked ex... pour gerer le formulaire
    return (
        <div>
        <label >{label}</label>
            <input {...input} />
            { touched && error}
        </div>
    );
}

export default SurveysField;