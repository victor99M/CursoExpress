const express = require("express");
const app = express();
app.use(express.json());

app.get("/user", (req, res) => {
  res.json({
    username: "Victor",
    lastname: "Sandoval",
  });
});

app.post("/user/:id", (req, res) => {
  console.log(req.body);
  console.log(req.params);
  res.send("POST REQUEST RECEIVED");
});

app.put("/contact", (req, res) => {
  res.send("UPDATE REQUEST RECEIVED");
});

app.delete("/test", (req, res) => {
  res.send("<h1>DELETE REQUEST RECEIVED</h1>");
});

app.listen(3000, () => {
  console.log("Server on port 3000");
});
