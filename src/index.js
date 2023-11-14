const express = require('express')
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/index');

const app = express();

// [Middleware]
app.use(express.static(path.join(__dirname, '../public')))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Connect DB
const db = require('./db/index');
db.connect();

const port = 3000;

app.get('/', (req, res) => {
    res.json('hello')
})

app.use(router);

app.listen(port, () => {
    console.log("Server running on port 3000");
})

// /b/mongodb/bin/mongod.exe --dbpath=/b/mongodb_data