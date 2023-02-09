const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;






app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });