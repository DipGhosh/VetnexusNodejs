// connect to mongodb
const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;
const connectToDatabase = () => {
    mongoose.connect(MONGO_URI).then(() => {
        return console.log(`Successfully connected to ${MONGO_URI}`);
    }).catch(error => {
        console.log('Error connecting to database: ', error);
        return process.exit(1);
    });
};

module.exports = connectToDatabase;