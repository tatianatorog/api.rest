const express = require('express')
const app = express();
const morgan = require('morgan');

//settings
app.set('port',process.env.PORT || 3000);
//In case the port exist in the cloud
app.set('json spaces', 2)


// middleware process data before the server get them
app.use(morgan('dev'));
// you can use 'combined' for more imformation 
app.use(express.json())
//method that allows the server to read json format
app.use(express.urlencoded({extended:false}))
// to read info from forms

//router
app.use(require('./routes/index'))


// send "string"

// Starting the server
app.listen(app.get ('port'), () =>{
    console.log(`Server on port ${app.get('port')}`);
    
});
