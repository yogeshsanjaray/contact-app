const dotenv = require("dotenv");
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var mongoose = require("mongoose");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("connection successfully");
  })
  .catch((err) => {
    console.log("no connection mongodb");
  });

// var mongoConnUrl = "mongodb://localhost/zenrays";
// mongoose.connection.on("error", function () {
//   console.log("Mongodb connection error");
// });
// mongoose.connection.on("connected", function () {
//   console.log("Mongodb connection successfull");
// });

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

if (process.env.NODE_ENV == "production") {
  app.use(express.static("contact-list-app/build"));
  const path = require("path");

  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "contact-list-app", "build", "index.html")
    );
  });
}

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
