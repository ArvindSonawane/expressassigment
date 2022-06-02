const express = require('express')
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8001;
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send(require("./res/student.json"))
});
app.listen(8001, () => {
  console.log('server started');
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});