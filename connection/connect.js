const mongoose = require("mongoose");

// const DB = async() => {
//     try 
//     {
//        await mongoose.connect(
//             "mongodb+srv://avichovatiya0:1avi1029@cluster0.xxoubhf.mongodb.net/", { useNewUrlParser: true }    
            
//         );
//         console.log(`MongoDB Connected Successfully...`);
//     } 
//     catch (error) 
//     {
//         console.log(error);
//     }
// };

const mongoURI = 'mongodb://localhost:27017';
const DB = async() => {
    try 
    {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        // console.log('Connected to MongoDB');
        // return client.db();
        console.log(`MongoDB Connected Successfully...`);
    } 
    catch (error) 
    {
        console.log(error);
    }
};


module.exports = DB;