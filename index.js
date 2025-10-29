const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json());

const connectDB = require('./DB/config');



app.use('/api/v1/user',(req,res)=>{
    res.send('api is working')
})

const PORT = process.env.PORT || 3000; 
//server calling
const start = () =>{
    connectDB(process.env.MongoURI)
    app.listen(PORT , ()=>{
        console.log("server running on the port" , PORT);
    })
}
start();