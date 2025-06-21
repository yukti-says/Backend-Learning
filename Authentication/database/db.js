const mongoose = require('mongoose')


const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('mongo db connected successfully');
        
        
    }
    catch (e) {
        // console.log(e);
        console.error('mongo db connection failed')
        process.exit(1)
        
    }
}

module.exports = connectToDB