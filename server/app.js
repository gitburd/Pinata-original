const express = require('express');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors')
var Skill = require('./models/skill')


// const logger = require("morgan");
// const Data = require("./data");
// const request = require('request-promise');
const app = express();
const http= require('http');
const router = express.Router();

// connect to mongoose 
mongoose.connect('mongodb://localhost/hmh', {useNewUrlParser: true});
var db = mongoose.connection;
const port = 3001;

// express midware
app.use(express.json());
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true,}))




// calling my server to get info from my database
// when u get a request for this end point run this function 
app.get('/', function(req,res){
    res.send("Hello World!!!");
});


app.get('/api/skills', function(req,res){

    Skill.getSkills(function(err,skills){
        if (err){
            throw err;
        }
        res.json(skills);
    });
});



// app.post('/api/icon', function(req,res){
//     var newItem = new Item();
//     newItem.img.data = fs.readFileSync(req.files.userPhoto.path)
//     newItem.img.contentType = ‘image/png’;
//     newItem.save();
//    });
// app.get('/skills', db.getSkills);


// app.get('/skills/get', db.getOneSkill);
// app.get('/:user/skills/', db.getUserSkillsList);
// app.post('/:user/skills/add', db.addUserSkill);
// app.get('/:user/skills/:skill_id', db.getUserSkill);
// app.put('/:user/skills/:skill_id', db.updateSkill);
// app.delete('/:user/skills/:skill_id', db.deleteSkill);


app.listen(port);
console.log(`I'm listening on 3001!`)



