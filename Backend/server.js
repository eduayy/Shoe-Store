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
app.use("/api/users", userRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server port:${PORT}`);
});
