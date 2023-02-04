const { Pool } = require("pg");

require("dotenv").config({ path: "./.env" });

const pool = new Pool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  allowExitOnIdle: true,
});

const getPosts = async () => {
  const { rows } = await pool.query("SELECT * FROM posts");
  return rows;
};

const addPosts = async (titulo, img, descripcion, likes) => {
  const consulta = "INSERT INTO posts values (DEFAULT, $1, $2, $3, $4)";
  const values = [titulo, img, descripcion, likes];
  const result = await pool.query(consulta, values);
  console.log("Post added successfully");
};

module.exports = { getPosts, addPosts };
