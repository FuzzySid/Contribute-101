const { list } = require("./contributors/index");

const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { List: list });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("connected to port " + port);
});
