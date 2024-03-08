const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  body: {
    type: [String], 
    required: true,
  },
});

const TaskModel = mongoose.model('task' ,TaskSchema)
module.exports= TaskModel