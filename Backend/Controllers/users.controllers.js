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

// POST USERS
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

// Export module to routers
module.exports = { getUsers, postUsers };
