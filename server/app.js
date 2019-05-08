const express = require('express');
const db = require('./queries')
const cors = require('cors')
const app = express();
const port = 3001;
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

// const http= require('http');
// const router = express.Router();

 
app.use(express.json());
app.use(cors())

app.get('/', function(req,res){
    res.send("Hello World!!!");
});

app.get('/api/all', db.getBaseSkills)

app.get('/api/criticalSkills', db.getCriticalSkills)

app.get('/api/emotionSkills', db.getEmotionSkills)
   
app.get('/api/userSkills/', db.getUserSkills)
  
app.get('/api/skill_id/', db.getSkillId)

app.get('/api/emotion_id/', db.getEmotionId)

app.get('/api/userRecords', db.getUserRecords)

app.get('/api/promptRecord', db.getPromptRecord)

app.get('/api/newRecord', db.getNewRecord)

app.post('/api/records', db.newRecord) 

app.post('/api/recordwithskill', db.newRecordWithSkill) 

app.put('/api/setSkill', db.setSkill)

app.post('/api/fullRecord', db.addFullRecord)

app.put('/api/userRecords', db.finishRecord)

app.post('/api/user', db.MakeNewUser)

app.get('/api/user', db.GetUserId)
// http://localhost:3001/api/user?auth0_id=hbo28


 




// // this is Express middleware that will validate ID tokens
// const checkJwt = jwt({
//     secret: jwksRsa.expressJwtSecret({
//       cache: true,
//       rateLimit: true,
//       jwksRequestsPerMinute: 5,
//       jwksUri: `https://dev-g9bfudtd.auth0.com/.well-known/jwks.json`
//     }),
  
//     // Validate the audience and the issuer.
//     audience: '52nWjKf0RiI4Wlih3OzwLJSzjSmKPjju',
//     issuer: `https://dev-g9bfudtd.auth0.com/`,
//     algorithms: ['RS256']
//   });

// app.get('/api/all', db.getBaseSkills)

// app.get('/api/emotionSkills', checkJwt, db.getEmotionSkills)
//     // http://localhost:3001/api/emotionSkills?emotion=Angry

// app.get('/api/userSkills/', checkJwt, db.getUserSkills)
//     // ex -- http://localhost:3001/api/userSkills?id=2&emotion=Angry

// app.get('/api/skill_id/', checkJwt, db.getSkillId)
// // ex -- http://localhost:3001/api/skill_id?skillTiltle=Cook


// app.get('/api/emotion_id/', checkJwt, db.getEmotionId)
// // ex -- http://localhost:3001/api/emotion_id?emotion_text=Sad


// app.get('/api/userRecords', checkJwt, db.getUserRecords)
//     // http://localhost:3001/api/userRecords?id=2

// // app.post('/api/userRecords', db.addRecord) 

// app.get('/api/mostRecentRecord',checkJwt, db.getMostRecentRecord)
// // /api/mostRecentRecord?user_id=2


  

// // app.post('/api/records', db.newRecord) 

// app.post('/api/records', checkJwt, db.newRecord) 

// app.put('/api/setSkill', checkJwt, db.setSkill)
// // /api/setSkill

// // body 
//   {
//     "record_id": "",
//    "skill_id":""
//   }




// app.post('/api/fullRecord', checkJwt, db.addFullRecord)

// // {
// //     "user_id":"2",
// //     "skill_id":"2",
// //     "emotion_id":"2",
// //     "before_lvl":"2",
// //     "after_lvl":"2",
// //     "impact":"2",
// //     "date":"2020-02-20",
// //     "si":"true",
// //     "sh":"true"

// //   }

// app.put('/api/userRecords', checkJwt, db.finishRecord)

// // body 
// //   {
// //     "record_id": "",
// //     "after_lvl": "",
// //     "before_lvl": ""
// //   }


app.listen(port);
console.log(`I'm listening on 3001!`)



