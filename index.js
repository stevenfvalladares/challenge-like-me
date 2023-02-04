const express = require("express");
const app = express();

const cors = require("cors");

app.listen(3000, console.log("Server running from port 3000"));

app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname.concat("/public/index.html"));
});
