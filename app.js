const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index-routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('../server'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization'
    );
    next();
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on port ${port}`));

app.use('/phones', routes);
