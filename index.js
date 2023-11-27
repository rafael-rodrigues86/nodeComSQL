const cors = require("cors");
const express = require("express");
const userRoutes = require("./routes/userRoutes");
const tagRoutes = require("./routes/tagRoutes");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/users", userRoutes);
app.use("/tags", tagRoutes);

app.listen("3000", () => {
  console.log("Servidor rodando em http://localhost:3000");
});
