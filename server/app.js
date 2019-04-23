const express = require('express');
const db = require('./queries')
const cors = require('cors')
const app = express();
const port = 3001;

// const http= require('http');
// const router = express.Router();

 
app.use(express.json());
app.use(cors())

app.get('/', function(req,res){
    res.send("Hello World!!!");
});

app.get('/api/all', db.getBaseSkills)

app.get('/api/emotionSkills', db.getEmotionSkills)
    // http://localhost:3001/api/emotionSkills?emotion=Angry

app.get('/api/userSkills/', db.getUserSkills)
    // ex -- http://localhost:3001/api/userSkills?id=2&emotion=Angry

app.get('/api/skill_id/', db.getSkillId)
// ex -- http://localhost:3001/api/skill_id?skillTiltle=Cook


app.get('/api/emotion_id/', db.getEmotionId)
// ex -- http://localhost:3001/api/emotion_id?emotion_text=Sad


app.get('/api/userRecords', db.getUserRecords)
    // http://localhost:3001/api/userRecords?id=2

app.post('/api/userRecords', db.addRecord)
// {
//     "user_id":"2",
//     "skill_id":"2",
//     "emotion_id":"2",
//     "before_lvl":"2",
//     "date":"2020-02-20",
//     "si":"true",
//     "sh":"true"

//   }


app.post('/api/fullRecord', db.addFullRecord)

// {
//     "user_id":"2",
//     "skill_id":"2",
//     "emotion_id":"2",
//     "before_lvl":"2",
//     "after_lvl":"2",
//     "impact":"2",
//     "date":"2020-02-20",
//     "si":"true",
//     "sh":"true"

//   }

app.put('/api/userRecords', db.finishRecord)

// body 
//   {
//     "record_id": "",
//     "after_lvl": "",
//     "before_lvl": ""
//   }


app.listen(port);
console.log(`I'm listening on 3001!`)



