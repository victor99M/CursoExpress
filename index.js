const express = require("express");
const morgan = require("morgan");
const app = express();

//Settings
app.set("appName", "Fazt Express Tutorial");
app.set("port", "3000");
app.set("view engine", "ejs");

//Middlewares
app.use(express.json());
app.use(morgan("dev"));

//Routes
//simepre pasa por esa ruta en caso de poner next hasta ahi termina con next ejecuta las demas rutas
// app.all("/user", (req, res, next) => {
//   console.log("por aqui paso");
//   //   res.send("finish");
//   next();
// });

app.get("/", (req, res) => {
  const data = [
    { name: "Victor" },
    { name: "Manuel" },
    { name: "Daniel" },
    { name: "Rayan" },
  ];
  res.render("index.ejs", { people: data });
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

app.use(express.static("public"));

app.listen(app.get("port"), () => {
  console.log(app.get("appName"));
  console.log("Server on port", app.get("port"));
});
