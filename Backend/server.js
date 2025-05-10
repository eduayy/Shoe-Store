// backend/server.js
const express = require("express");
const cors = require("cors");
const client = require("./db");

const app = express();
app.use(cors());
// Recieve data in JSON for parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// All routes
const userRoutes = require("./Routes/user.routes.js");
app.use("/api/users", userRoutes); // User endpoint
// IF YOU WANT TO USE ENDPOINT POST JUST USE "/api/users/login"
const clothingRoutes = require("./Routes/clothing.routes.js");
app.use("/api/clothing", clothingRoutes); // Clothe endpoint
const sportSHoes = require("./Routes/sport-shoes.routes.js");
app.use("/api/sport-shoes", sportSHoes); // Sport shoes endpoint
const hotSales = require("./Routes/hot-sales.routes.js");
app.use("/api/hot-sales", hotSales); // Hot Sales endpoint
const getShorts = require("./Routes/shorts.routes.js");
app.use("/api/shorts", getShorts); // Endpoint shorts
const getUnderware = require("./Routes/underware.routes.js");
app.use("/api/underware", getUnderware);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`
  ╔══════════════════════════════════╗
  ║                                  ║
  ║         S E R V E R  O N         ║
  ║                                  ║
  ║     http://localhost:${PORT}        ║
  ║                                  ║
  ╚══════════════════════════════════╝
`);
});
