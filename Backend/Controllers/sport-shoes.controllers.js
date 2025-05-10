const { json } = require("express");
const client = require("../db.js");

// SPORT SHOES CONSULT 'GET'
const getSportShoes = async (req, res) => {
  try {
    const result = await client.query("SELECT * FROM sportShoes");
    return res.json(result.rows);
  } catch (err) {
    console.error("Query failed!", err);
    return res.status(500).json({ error: "Error obtaing sport shoes data." });
  }
};

module.exports = { getSportShoes };
