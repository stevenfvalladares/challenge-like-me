const { getPosts, addPosts } = require("./consultas");
const express = require("express");
const app = express();

const cors = require("cors");

app.listen(3000, console.log("Server running on port 3000"));

app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname.concat("/public/index.html"));
});

app.get("/posts", async (req, res) => {
  const posts = await getPosts();
  const data = posts.map((post) => ({
    id: post.id,
    titulo: post.titulo,
    img: post.img,
    descripcion: post.descripcion,
  }));
  res.json(data);
});

app.post("/posts", async (req, res) => {
  const { titulo, imageUrl, descripcion, likes } = req.body;
  await addPosts(titulo, imageUrl, descripcion, likes);
  res.send("Post added successfully");
});
