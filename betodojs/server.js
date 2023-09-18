require("dotenv").config();

const cors = require("cors");
const swaggerDocs = require("./swagger");
const hbs = require("hbs");

const bodyParser = require("body-parser");

let port = process.env.APP_PORT || "8000";
let host = process.env.APP_HOST || "localhost";

var express = require("express");
var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "hbs");
app.set("views", "./views");

const userRouter = require("./routes/user");
const todoRouter = require("./routes/todo");
const groupRouter = require("./routes/group");

app.use('/', userRouter, todoRouter, groupRouter);

swaggerDocs.swagger(app);

app.get('/', (req, res) => {
  res.render("welcome", {
    text: "Hello, It's Work!"
  });
})

app.listen(port, () => {
  console.log(`listening on http://${host}:${port}`);
});

