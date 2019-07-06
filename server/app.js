const express = require('express');
const db = require('./queries')
const cors = require('cors')
const app = express();
const port = 3001;
 

const jwt = require('jsonwebtoken');

app.use(express.json());
app.use(cors()); 


app.get('/', function(req,res){
    res.send("Hello World!!!");
});

// get the token with log in then set it in the state, keep it in local storage and pass it was a header in all of the calls 

app.get('/login/', db.login);
app.get('/tokentest',verifyToken, db.tokenTest);

app.get('/api/user', db.getUserId)
app.post('/api/user', db.makeNewUser)


app.get('/api/baseskills', db.getBaseSkills)

app.get('/api/customskills', db.getCustomSkills)

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



app.get('/api/search/SI', db.searchBySI)

app.get('/api/search/critical', db.searchByCritical)

app.get('/api/search/Impact', db.searchByImpact)

app.get('/api/search/Feeling', db.searchByFeeling)

app.get('/api/search/Skill', db.searchBySkill)

app.get('/api/search/Unfinished', db.searchByUnfinished)

app.get('/api/search/FullList', db.getUserRecords) 

app.post('/api/customskills', db.makeCustomSkill)

// app.get('/api/customskills', db.geCustomSkills)
 

// FORMAT OF TOKEN
// Authorization: Bearer <access_token>

// Verify Token
function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if(typeof bearerHeader !== 'undefined') {
      // Split at the space
      const bearer = bearerHeader.split(' ');
      // Get token from array
      const bearerToken = bearer[1];
      // Set the token
      req.token = bearerToken;
      // Next middleware
      next();
    } else {
      // Forbidden
      res.sendStatus(403);
    }
  
  }

 
app.listen(port);
console.log(`I'm listening on 3001!`)


// app.post('/api/login', (req,res) =>{
    
//     // here i would send user name and password, do auth with database 
//     // mock user
//     const user = {
//         id:1, 
//         user:'me',
//         email:'email@gmail.com'
//     }
//     jwt.sign({user}, 'secretkey', (err,token) => {
//         // this send the token back 
//         res.json({
//             token
//         });
//     }); 
// });


// Add this below all your other routes
if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "../client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}