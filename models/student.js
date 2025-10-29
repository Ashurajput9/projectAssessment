const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    cgpa:{
        type:Number,
        required:true
 }
})

const Student = mongoose.model('student',StudentSchema);

//module
module.exports = Student;