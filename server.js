const express = require('express');
require('dotenv').config()
const process = require('process');
const app = express();
const PORT = process.env.PORT||3000 ;
const bodyParser =require('body-parser')
const mongoose =require("mongoose");
const user=require('./controllers/userController');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.get('/',(req,res)=>{
    res.send("Hello Word ");
})

app.post('/user',user.createUser);
app.delete('/deleteUser/:id',user.deleteUser);
app.get('/getAll',user.getUsers);
app.get('/user/:id',user.findUserbyId);
app.get('/filter/:city',user.filterbycity);

console.log(process.env.PASS + " " + process.env.NAMES+ " helllllll");

// mongoose.connect('mongodb://username:password@host:port/database?options...');

mongoose.connect(`mongodb://${process.env.NAMES}:${process.env.PASS}@localhost:27019/`, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{console.log('Mongodb connected')})
.catch((err)=>{console.log('ERR :',err)});




app.listen(PORT,(req,res)=>{
 console.log(`listening at port ${PORT}`);
})
// mongoose.connect()
