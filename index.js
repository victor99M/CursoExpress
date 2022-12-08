const express = require("express");
const app = express();

app.get("/user", (req, res) => {
  res.json({
    username: "Victor",
    lastname: "Sandoval",
  });
});

app.post("/abaout", (req, res) => {
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
