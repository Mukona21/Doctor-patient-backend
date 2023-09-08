//const pool = require("pg").Client;
require("dotenv").config();

///*
const pool = require("pg").Pool;
const dbPool = new pool({
    user: "etpsxnee",
    host: "tyke.db.elephantsql.com",
    database: "etpsxnee",
    password: "QnAXP1NHjg4gjVTJ6ZyDRykcFrKsi0kd",
    port: 5432,
})
//*/

//postgres://username:password@hostname/databasename
//postgres://etpsxnee:QnAXP1NHjg4gjVTJ6ZyDRykcFrKsi0kd@tyke.db.elephantsql.com/etpsxnee

//const dbPool = new pool(process.env.DB_URL);

module.exports = dbPool;