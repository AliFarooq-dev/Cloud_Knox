const express = require('express')

const connectToMongo = require('./db');
var cors = require('cors');

connectToMongo();
const app = express();

const port = 5000;
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World! ali farooq')
})

app.use('/api', require('./routes/auth'));
app.use('/api', require('./routes/note'));

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})