const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const taskSchema = new Schema({
    id: String,
    title: String,
    // dueDate: Date,
    // priority: String,
    //0 indicates pending and 1 indicates done
    status: Number,
    
});
taskSchema.methods.addTask = function (title, status) {
    this.id = this._id;
    this.title=title;
    this.status=status;
    console.log('Task added with id: ', this.id);
     this.save();
     return this.id;
}
// taskSchema.methods.updateTask = async function (id, title, description, status) {
//    const task=await findOneAndUpdate({ _id: id }, { title, description, status }, { new: true });
//    return;
// };

taskSchema.methods.deleteTask = async function (id) {
    await this.model('Task').deleteOne({ _id: id });
}
//this Task model is used to perform CRUD operations on the tasks collection
module.exports = mongoose.model('Task', taskSchema);