const express = require("express");
const engine = require("ejs-mate");
const path = require("path");

//initializations
const app = express();

//settings
app.engine("ejs", engine); //motor de plantillas definido
app.set("view engine", "ejs"); // establezco en mi app el motor de plantilas llamado ejs
app.set("views", path.join(__dirname, "views"));

console.log(__dirname);

//routes
app.use(require("./routes/index"));

//static files
app.use(express.static(path.join(__dirname, "public")));

//starting the server
app.listen(3000, () => {
    console.log("server on port 3000");
});