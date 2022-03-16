const express = require("express");
const routes = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
routes.get("/user", (req, res) => {
  console.log("helo");
});
module.exports = routes;
