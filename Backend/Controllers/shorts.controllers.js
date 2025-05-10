const { json } = require("express");
const client = require("../db.js");

// CONSULT FOR GET SHORTS DATA
const getShorts = async (req, res) => {
  try {
    const result = await client.query("SELECT * FROM shorts");
    return res.json(result.rows);
  } catch (err) {
    console.error("Query failed.", err);
    return res.status(500).json({ error: "Error obtaining data." });
  }
};

module.exports = { getShorts };
