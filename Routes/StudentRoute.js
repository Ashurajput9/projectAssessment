const express = require('express');
const Router = express.Router();


//registered student
const newStudent = require('../controller/newStudent');
Router.post('/students',newStudent);

//view Students
const viewStudent = require('../controller/viewStudents');
Router.get('/students',viewStudent)

//single Studnets
 const SingleStudent = require('../controller/singleStudent');
 Router.get('/students/:id',SingleStudent);

 //Delete Students
 const DeleteStudent = require('../controller/Delete');
 Router.delete('/students/:id',DeleteStudent);


//module exporting
module.exports = Router;