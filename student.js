
var express = require('express'); 
var app = express();
var fs = require('fs'); 
const port = process.env.PORT || 8080;

app.get('/getStudents', function(req, res){
    fs.readFile(__dirname + "/" + "students.json", 'utf8', function(err, data){
        console.log(data);
        res.end(data); 
    });
})


var student = {
    "student2": {
        "id":1,
        "studentFirstName":"Xyz",
        "collegeName": "IIT",
        "location": "Mumbai"
      },
} 




app.post('/addStudent', function(req, res){
    
    fs.readFile(__dirname + "/" + "students.json", 'utf8', function(err, data){
        data = JSON.parse(data);
        
        data["student2"] = student["student2"];
        console.log(data);
        res.end(JSON.stringify(data));
    });
})



var server = app.listen(3005, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("REST API demo app listening at http://%s:%s", host, port)
})