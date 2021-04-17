const mongoose = require('mongoose');
const connString=require('./config')

mongoose.Promise = global.Promise;

// Connect MongoDB at default port 27017.
mongoose.connect(connString, {
    useNewUrlParser: true,
    useCreateIndex: true,
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});
