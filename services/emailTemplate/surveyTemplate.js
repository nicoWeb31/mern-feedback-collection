module.exports =(survey)=>{

    return `
    
    <html>
        <body>
            <div style="text-align: center;">
            <h3>I'd like your impout </h3>
            <p>Please answer the following question</p>
            <p>${survey.body}</p>
            <div>
                <a href="http://localhost:5002">yes</a>
            </div>
            <div>
                <a href="http://localhost:5002">no</a>
            </div>
    
            </div>
        </body>
    </html>
    
    
    
    `
}
