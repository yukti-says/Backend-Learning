const { default: mongoose } = require("mongoose");

// const mongoose = require(mongoose)

const connectDB = async () => {
    try {
        await mongoose.connect(
          "mongodb+srv://jarkyamin:aCyAAw5Q2L3r92U4@cluster0.zmrma1m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        );
        console.log("connected")
        
    }
    catch (e) {
        console.log('failed to connect', e)
        process.exit(1)
        
    }
}

module.exports = connectDB;