const Student = require('../models/student');

const SingleStudent = async(req , res)=>{
    const id = req.params.id;
    const student = await Student.findById(id);
    res.status(200).send(student);
}

//module exports
module.exports = SingleStudent ;