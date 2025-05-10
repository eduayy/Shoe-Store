// This file is only for DB connection, where you can add your credentials to connect to your database
// DB NAME: ShoeStore
// USER: shoeDB
// PASSWORD: shoestore123

const { Client } = require("pg");

// Connection to database
const client = new Client({
  user: "shoeDB",
  host: "localhost",
  database: "ShoeStore",
  password: "shoestore123",
  port: "5432",
});

client
  .connect()
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.error("Fail connection:", err.message);
    console.error(err.stack);
  });

// EXPORT CLIENT ALWAYS
module.exports = client;
