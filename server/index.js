const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/expressvue', {useNewUrlParser: true});
mongoose.Promise = global.Promise;

const app = express();

// middelware
app.use(bodyparser.json());
app.use(cors());

const posts = require('./rountes/api/posts');
app.use('/api/posts', posts);

const port = process.env.port || 5000;
app.listen(port, ()=>{
    console.log(`server started on port ${port}`);
});
