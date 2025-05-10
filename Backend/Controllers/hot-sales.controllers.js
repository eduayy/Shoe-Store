const { json } = require("express");
const client = require("../db.js");

// CONSULT OF HOT SALES
const getHotSales = async (req, res) => {
  try {
    const result = await client.query("SELECT * FROM hotSales");
    return res.json(result.rows);
  } catch (err) {
    console.error("Query failed", err);
    return res.status(500).json({ error: "Error obtaining hot sales" });
  }
};

module.exports = { getHotSales };
