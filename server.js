const  express = require('express');

const app = express();

// app.use('/',(req,res)=>{
//     console.log('server run well.....')

//     res.status(200).json({message: 'server run wel'})

// })

app.get('/',(req,res)=>{
    res.send({hi: 'there'})
})







app.listen(5002,()=>{
    console.log('server run .....')
});