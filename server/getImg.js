var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/hmh', {useNewUrlParser: true});
var db = mongoose.connection;
const port = 3001;

var conn = mongoose.connection;
var path = require('path');
var Grid =  require('gridfs-stream');
var fs = require('fs');

Grid.mongo = mongoose.mongo;

conn.once('open', function(){
    console.log('-connection open-');
    var gfs = Grid(conn.db);
var fs_write_stream = fs.createWriteStream(path.join(__dirname, './uploads/pet.jpeg'))

    var readstream = gfs.createReadStream({
        filename:'petIcon.jpeg'
    });

    readstream.pipe(fs_write_stream);
    fs_write_stream.on('close', function (){
        console.log('it worked!')
    });
})