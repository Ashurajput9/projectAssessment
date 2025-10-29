const Student = require('../models/student');

const newStudent = async(req ,res)=>{
    try{
    const {id , name , cgpa} = req.body;
    const student   = await Student.findById({id:id});
    if(student){res.status(400).json({message:"student already registered"})};
    await Student.create({id:id , name:name , cgpa:cgpa});

    res.status(201).json({message:"student registered successfully"});
    }
    catch(error){
    res.status(500).json({ message: "Internal Server Error", Error: error.message });

    }


}

//module exporting
module.exports = newStudent;