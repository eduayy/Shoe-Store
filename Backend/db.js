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
    // Nice animation for backend server running
    console.log(`
  ╔════════════════════════════════════════════════════╗
  ║                                                    ║
  ║                                                    ║
  ║               D B C O N N E C T E D                ║
  ║                                                    ║
  ║              Express Server READY!!                ║
  ║                                                    ║
  ╚════════════════════════════════════════════════════╝
`);
  })
  .catch((err) => {
    console.log(`
  ╔════════════════════════════════════════════════════╗
  ║                                                    ║
  ║                                                    ║
  ║            D B N O T C O N N E C T E D             ║
  ║                                                    ║
  ║              Express Server ERROR!!                ║
  ║                                                    ║
  ╚════════════════════════════════════════════════════╝
`);
  });

// EXPORT CLIENT ALWAYS
module.exports = client;
