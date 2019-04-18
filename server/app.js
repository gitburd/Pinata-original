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


app.get('/api/emotionSkills', db.getEmotionSkills)
app.get('/api/userSkills', db.getUserSkills)
app.get('/api/userRecords', db.getUserRecords)




app.listen(port);
console.log(`I'm listening on 3001!`)



