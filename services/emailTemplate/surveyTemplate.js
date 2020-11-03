const keys = require('../../config/keys').domain;

module.exports =(survey)=>{

    return `
    
    <html>
        <body>
            <div style="text-align: center;">
            <h3>I'd like your impout </h3>
            <p>Please answer the following question</p>
            <p>${survey.body}</p>
            <div>
                <a href="${keys}">yes</a>
            </div>
            <div>
                <a href="${keys}">no</a>
            </div>
    
            </div>
        </body>
    </html>
    
    
    
    `
}
