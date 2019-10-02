const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sequelize = require('./config/db')
const app = express();

const port = process.env.PORT || 6942

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => res.send("I lost my son please send help"));

app.listen(port, () => console.log(`app listening on port ${port}, please get hearing protection`));

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });