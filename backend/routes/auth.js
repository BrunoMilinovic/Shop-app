const express = require("express");
const routes = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// register a User
routes.post("/register", async (req, res) => {
  try {
    await prisma.user.create({
      data: {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      },
    });
    res.send({ status: "ok" }).status(200);
  } catch (err) {
    res.send({ error: `${err}` }).status(500);
  }
});
module.exports = routes;
