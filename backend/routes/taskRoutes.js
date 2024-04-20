const express=require('express');
const router=express.Router();
const taskController=require('../controllers/tasksFunctions');
router.get('/getTasks', taskController.getTasks);
router.post('/addTask',taskController.addTask);
router.post('/updateTask',taskController.updateTask);
router.post('/deleteTask',taskController.deleteTask);
module.exports=router;