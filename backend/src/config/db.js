const mongoose = require('mongoose');
const config = require('config');
/*const db = config.get('mongoURI');*/

const connectDB = async () => {
    try {

        await mongoose.connect("mongodb+srv://sabudanakichdi:555agile@solarmanagement.yihdjne.mongodb.net/salesManagement?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            //useCreateIndex: true,
            //useFindAndModify: false
        })
        console.log("mongodb connected")
    } catch (err) {
        console.log("mongo db connection failed with ", err.message)
        process.exit(1);
    }

}


module.exports = connectDB