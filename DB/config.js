const mongoose =require('mongoose');


const connectDB= async(URL) =>{
    try{
    await mongoose.connect(URL);
    console.log("Database is connected successfully");
    }
    catch(error){
        console.log("Database is not connected" ,error);
    }
}

//Module exporting
module.exports = connectDB ;