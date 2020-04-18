const express = require('express');
const mongoose = require('mongoose');
const body_parser = require('body-parser');
const app = express();

//MiddleWares

// app.use('/posts', () => {
//     console.log("This sis a middleware running");
// });

app.use(body_parser.json());

//Import Routes 

const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);


//ROUTES

app.get('/',(req,res) => {
    res.send('Hello There!!');
}); 

// app.get('/posts',(req,res) => {
//     res.send('Hello There posts!!');
// }); 

//Connect to DB

mongoose.connect('mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb',
{ useNewUrlParser: true,
useUnifiedTopology: true  },
 () => {
    console.log("Connected to DB");
});

//Listening to the server
app.listen(3000);