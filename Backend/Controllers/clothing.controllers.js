const client = require("../db");
const { json } = require("express");

const getClothes = async (req, res) => {
  try {
    const result = await client.query("SELECT * FROM clothes");
    return res.json(result.rows);
  } catch (err) {
    console.error("Query failed.", err);
    return res.status(500).json({ error: "Error obtaining data" });
  }
};

// export module to routes
module.exports = { getClothes };
