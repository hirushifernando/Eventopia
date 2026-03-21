const express = require ("express");
const mongoose = require ("mongoose");
const cors = require ("cors");
const UserModel = require('./models/User');
const RegistrationModel = require('./models/Registration');
const TaskModel = require('./models/Task');
const ContactModel = require('./models/Contact');

const app = express();

app.use(express.json());
app.use(cors());


mongoose.connect("mongodb://127.0.0.1:27017/user")

app.post('/setting', (req, res) => {
    RegistrationModel.create(req.body)
    .then(settings => res.json(settings))
    .catch(err =>res.json(err))
});


app.post('/dashboard', (req, res) => {    
    TaskModel.create(req.body)
        .then(tasks => res.json(tasks))
        .catch(err => res.json(err))
});

app.post('/dashboard/addbody', (req, res) => {
    const { idx, newBodyContent } = req.body;
    TaskModel.create(
        { _id: idx }, // Search for the task by its ID
        { $push: { body: newBodyContent } }, // Add the new body content to the 'body' array
        { new: true } // Return the updated task
    )
    .then(tasks => res.json(tasks))
    .catch(err => res.json(err));
});

app.post('/contactus',(req, res) =>{
    ContactModel.create(req.body)
    .then(contacts => res.json(contacts))
    .catch(err =>res.json(err))
})
app.post('/login',(req, res) =>{
    const {email, password} = req.body;
    UserModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("The password is incorrect")
            }
        }else {
            res.json("No record existed. Please create a account")
        }
    })
})

app.post('/register',(req, res) =>{
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err =>res.json(err))
})


app.listen(8002, () => {
    console.log("server is running");
});
