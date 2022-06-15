
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


app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});
