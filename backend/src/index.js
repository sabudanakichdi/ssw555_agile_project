const express = require('express');
const app = express();
const connectDB = require('./config/db');
const path = require('path');
//connect to Database
connectDB()




// initialise middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/register', require('./routes/users'))
app.use('/api/login', require('./routes/users'))
app.use('/api/customerdetails', require('./routes/customer'))
app.use('/api/isAgreement', require('./routes/salesDetail'))
app.use('/api/isPayment', require('./routes/salesDetail'))
app.use('/api/status', require('./routes/salesDetail'))
app.use('/api/installDate', require('./routes/salesDetail'))
app.use('/api/tracking', require('./routes/salesDetail'))
app.use('/api/isToggle', require('./routes/salesDetail'))
app.use('/api/auth', require('./routes/auth'))



////server static assets in production


//// set static folder
//app.use(express.static('client/build'));

//app.get('*', (req, res) => {

//    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))

//})



const PORT = process.env.PORT || 5000;

// Start the server @ port 
app.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
})