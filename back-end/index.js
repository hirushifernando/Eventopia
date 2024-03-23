const express = require ("express");
const mongoose = require ("mongoose");
const cors = require ("cors");
const UserModel = require('./models/User');
const RegistrationModel = require('./models/Registration');
const TaskModel = require('./models/Task');
const ContactModel = require('./models/Contact');
const fs = require ("fs");
const app = express();
const bodyParser = require('body-parser');
const path = require('path')


app.use(express.json());
app.use(cors());
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

mongoose.connect("mongodb+srv://deshan20221509:C5232DFsoKAQeu2X@cluster0.g8hdg9b.mongodb.net/eventplannerdb?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB Atlas");
}).catch(err => {
  console.error("Error connecting to MongoDB Atlas:", err);
});

const Excel =require('exceljs')
app.get('/',(req, res) =>{
    res.json("helo");
});

app.post('/setting', (req, res) => {
    RegistrationModel.create(req.body)
    .then(settings => res.json(settings))
    .catch(err =>res.json(err))
});

app.post('/question_form/:doc_id' ,(req, res) =>{ 
    var docs_data = req.body;
    var name = req.params.doc_id
    console.log(docs_data)
    let data = JSON.stringify(docs_data);
    fs.writeFileSync(`files/${name}.json`, data);
})

app.get("/data/:doc_id",(req,res)=>{
    var docId=req.params.doc_id;
    fs.readFile(`files/${docId}.json`, (err, data)=>{
        if (err) throw err;
        let ques_data =JSON.parse(data);
        console.log(req.params.doc_id)
        res.send(ques_data);
    });
})

app.get("/get_all_filenames", (req,res)=>{
    const directoryPath = path.join(__dirname, '/files');


    fs.readdir(directoryPath, function (err, files){
        if(err){
            return console.log('Unable to scan directory: ' + err);
        }
        res.send(files);
    });
});

app.post("/student_response/:doc_id", (req, res) => {
    var docs_data = req.body;
    var name = req.params.doc_id;
    
    let workbook = new Excel.Workbook();
    let worksheet = workbook.addWorksheet(`Responses_${name}`);
    
    worksheet.columns = [
        { header: "Time Stamp", key: "datetime", width: 20 },
        ...docs_data.column // Assuming docs_data.column contains headers for the responses
    ];
    worksheet.getRow(1).font = { bold: true };
    
    // Assuming req.body.answer_data is an array of response objects
    req.body.answer_data.forEach(response => {
        worksheet.addRow({
            datetime: new Date(), // Assuming you want to timestamp each response
            ...response
        });
    });
    
    // Save the workbook
    workbook.xlsx.writeFile(`responses_${name}.xlsx`)
        .then(() => {
            res.json({ message: 'Responses added to Excel sheet successfully' });
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
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
            res.json("No record existed. Please create a  new account")
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
