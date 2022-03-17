const express = require("express");
const routes = express.Router();
const { PrismaClient } = require("@prisma/client");
const {
  verifyToken,
  verifyTokenAndAuthorization,
} = require("../midellwares/Verifytoken");
const prisma = new PrismaClient();

routes.post("/:id", verifyTokenAndAuthorization, (req, res) => {
  console.log("helo");
  res.send("helo");
});

module.exports = routes;
