//import express
const express = require('express');
// import connection to the database
const sequelize = require('./config/connection');
require('./models');

//set up the express app
const app = express()
const PORT = process.env.PORT || 3001;

//connect to the database before starting the express server
sequelize.sync().then(() => {
    app.listen(PORT,()=> {
        console.log(`App listening on port ${PORT}`);
    });
});
// const path = require("path");
// const express = require("express");

// const sequelize = require("./config/connection");

// const app = express();
// const PORT = process.env.PORT || 3001;

// sequelize.sync({ force: true }).then(() => {
//   app.listen(PORT, () => console.log("Now listening"));
// });
