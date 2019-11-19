const express = require("express");
const morgan = require("morgan");

const app = express();

/*************
 * SETTINGS  *
 *************/

app.set("port", process.env.PORT || 6000);

/*****************
 *  MIDDLEWARES  *
 *****************/

app.use(morgan("dev"));
app.use(express.json());

/************
 *  ROUTES  *
 ************/

app.use("/api/activities", require("./routes/actProg"));

module.exports = app;
