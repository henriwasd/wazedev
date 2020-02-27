const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://henrique:<henrique>@henrique-silva-tc8zq.gcp.mongodb.net/wazedev?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

app.get('/', (req, res) => {
    return res.json({
        message: 'teste'
    });
});

app.listen(3333);