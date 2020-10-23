const  express = require('express');

const app = express();

// app.use('/',(req,res)=>{
//     console.log('server run well.....')

//     res.status(200).json({message: 'server run wel'})

// })

app.get('/',(req,res)=>{
    res.send({hi: 'there'})
})





//for heroku
const PORT = process.env.PORT || 5002

app.listen(PORT,()=>{
    console.log(`server run .....on port ${PORT}....;)`)
});