const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

const tableRoutes = require('./routes/table');
app.use(tableRoutes);

app.listen(5500);
