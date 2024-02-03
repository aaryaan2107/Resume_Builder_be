const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;
const DB  = require('./connection/connect');
const Apis = require('./router/api');


app.use(cors());
app.use(express.json());

DB();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Method', 'GET,POST,HEAD,OPTIONS,PUT,PATCH,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept');
    next();
  });

app.use('/Apis',Apis);

app.listen(PORT, (error) => {
    console.log("Express project run port :-" , PORT );
});
