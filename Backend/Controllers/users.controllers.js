const { json } = require("express");
const client = require("../db.js");
// USERS CONSULT
// FOR PRIVACY CONSULT IN LOCAL FOR DATA PRIVACY
const getUsers = async (req, res) => {
  try {
    const result = await client.query("SELECT * FROM users");
    return res.json(result.rows);
  } catch (err) {
    console.error("Query failed!", err);
    return res.status(500).json({ error: "Error obtaining users" });
  }
};

// POST USERS ONLY USE IT FOR REGISTER
const postUsers = async (req, res) => {
  // Receive data frontend
  const { userName, userMiddleName, userLastName, userEmail, userPhone } =
    req.body;

  // Validate data
  if (!userName || !userLastName || !userEmail || !userPhone) {
    return res.status(400).json({
      error: "Missing data: (userName, userLastName, userEmail, userPhone)",
      details: { userName, userMiddleName, userLastName, userEmail, userPhone },
    });
  }

  // QUERY
  try {
    const result = await client.query(
      `INSERT INTO users (userName, userMiddleName, userLastName, userEmail, userPhone) 
      VALUES($1, $2, $3, $4, $5) RETURNING *`,
      [userName, userMiddleName || null, userLastName, userEmail, userPhone]
    );
    return res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("Error creating user.", err);
    res.status(500).json({ error: err.message });
    if (err.code === "23505") {
      return res.status(409).json({ error: "Email already exists." });
    } else {
      return res.status(500).json({ error: "Database error." });
    }
  }
};

// POST FOR LOGIN ONLY
// LOGIC FOR VALIDATE CREDENTIALS
const postLogin = async (req, res) => {
  // Recieve user credentials
  const { userName, userEmail } = req.body;

  // Validate credentials
  if (!userName || !userName.trim()) {
    return res.status(400).json({ error: "Not valid user name credentials." });
  }

  if (!userEmail || !userEmail.trim()) {
    return res.status(400).json({ error: "Not valid user email credentials." });
  }

  // FIND IF THE USER NAME AND EMAIL ARE FROM THE SAME USER AND VALIDATE IF IT EXISTS
  // Querys
  const query =
    "SELECT * FROM users WHERE userName = $1 AND userEmail = $2 LIMIT 1";
  const queryValues = [userName.trim(), userEmail.trim()];

  try {
    const queryResult = await client.query(query, queryValues);
    // Validate if user exists
    if (queryResult.rows.length === 0) {
      return res.status(404).json({ error: "User not found." });
    }

    // If user exist return user
    const user = queryResult.rows[0];
    return res.json({ user });
  } catch (err) {
    console.error("Error during login:", err);
    return res.status(500).json({ error: "Internal error server" });
  }
};

// Export module to routers
module.exports = { getUsers, postUsers, postLogin };
