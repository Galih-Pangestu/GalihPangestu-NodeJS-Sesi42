require("dotenv").config();
const express = require("express");

const userRoutes = require("./routes/user");
const middlewareLog = require("./middleware/log");

const apps = express();

apps.use(middlewareLog);
apps.use(express.json());

apps.use("/user", userRoutes);

apps.listen(4000, () => {
  console.log("server berhasil...");
});
