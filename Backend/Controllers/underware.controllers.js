const { json } = require("express");
const client = require("../db.js");

// UNDERWARE CONSULT DATA
const getUnderware = async (req, res) => {
  try {
    const result = await client.query("SELECT * FROM underware");
    return res.json(result.rows);
  } catch (err) {
    console.error("Query failed.", err);
    res.status(500).json({ error: "Error obtaining underware data" });
  }
};

module.exports = { getUnderware };
