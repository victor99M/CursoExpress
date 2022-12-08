const express = require("express");
const app = express();
app.use(express.json());
//simepre pasa por esa ruta en caso de poner next hasta ahi termina con next ejecuta las demas rutas
app.all("/user", (req, res, next) => {
  console.log("por aqui paso");
  //   res.send("finish");
  next();
});

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

app.put("/user/:userId", (req, res) => {
  console.log(req.body);
  res.send(`User ${req.params.userId} update`);
});

app.delete("/user/:userId", (req, res) => {
  res.send(`User ${req.params.userId} deleted`);
});

app.listen(3000, () => {
  console.log("Server on port 3000");
});
