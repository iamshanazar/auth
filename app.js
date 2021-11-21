const express = require("express");
const mongoose = require("mongoose");
const mongodb = require("mongodb");
const app = express();
const bodyParser = require("body-parser");
const User = require("./models/user");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const userRouter = require("./api/routes/user");

app.use("/user", userRouter);

const port = process.env.PORT || 8080;
mongoose
  .connect("mongodb://localhost:27017/project", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
