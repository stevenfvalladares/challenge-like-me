const { getPosts, addPosts, addLikes, deletePosts } = require("./consultas");
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
  try {
    const posts = await getPosts();
    const data = posts.map((post) => ({
      id: post.id,
      titulo: post.titulo,
      img: post.img,
      descripcion: post.descripcion,
    }));
    res.json(data);
  } catch (error) {
    res.json({ message: `An error has occurred!` });
  }
});

app.post("/posts", async (req, res) => {
  try {
    const { titulo, imageUrl, descripcion, likes } = req.body;
    await addPosts(titulo, imageUrl, descripcion, likes);
    res.send("Post added successfully");
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put("/posts/likes/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await addLikes(id);
    res.status(200).json({
      message: "Like added successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.delete("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await deletePosts(id);
    res.status(200).json({
      message: "Post deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
