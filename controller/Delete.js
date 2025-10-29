const Student = require('../models/student');

const DeleteStudent = async(req , res)=>{
    const id = req.params.id;
   const user =  await Student.findById(id);
   const DeleteStudent = await Student.Delete(user);
   res.satuts(200).json({message:"student deleted successfully" , DeleteStudent});
}

//module exporting 
module.exports = DeleteStudent ;