var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/hmh', {useNewUrlParser: true});
var db = mongoose.connection;
const port = 3001;

var conn = mongoose.connection;
var path = require('path');
var Grid =  require('gridfs-stream');
var fs = require('fs');

var imgPath = path.join(__dirname,'./uploads/pet.jpeg');

Grid.mongo = mongoose.mongo;

conn.once('open', function(){
    console.log('-connection open-');
    var gfs = Grid(conn.db);
    var writestream = gfs.createWriteStream({
        filename:'petIcon.jpeg'
    });
    fs.createReadStream(imgPath).pipe(writestream);
    writestream.on('close', function (file){
        console.log(file.filename + 'it worked!')
    })
})

