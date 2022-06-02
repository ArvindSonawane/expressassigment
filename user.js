
var express = require('express'); 
var app = express();
var fs = require('fs');
const port = process.env.PORT || 3006;

app.get('/getUsers', function(req, res){
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data){
        console.log(data);
        res.end(data); 
    });
})


var server = app.listen(3006, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("REST API demo app listening at http://%s:%s", host, port)
})