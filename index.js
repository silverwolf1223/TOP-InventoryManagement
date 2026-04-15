const express = require("express");
const path = require("node:path")
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({extended: true}));

const indexRouter = require('./routers/indexRouter.js');
const editRouter = require('./routers/editRouter.js');
const deleteRouter = require('./routers/deleteRouter.js');

app.use('/', indexRouter);


const port = process.env.PORT || 3000;

app.listen(port, (err) => { 
    if(err) throw err
    console.log("app listening to " + port)
});