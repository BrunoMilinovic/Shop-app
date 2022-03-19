const express = require("express");
const routes = express.Router();
const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyIsAdmin,
} = require("../midellwares/Verifytoken");
const prisma = new PrismaClient();

//UPDATE
routes.post("/:id", verifyTokenAndAuthorization, async (req, res) => {
  const ParamsId = parseInt(req.params.id);
  if (req.body.password) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    try {
      const UpdateUser = await prisma.user.update({
        where: {
          id: ParamsId,
        },
        data: {
          password: hashedPassword,
          username: req.body.username,
          email: req.body.email,
        },
      });
      res.send({ UpdateUser }).status(200);
    } catch (err) {
      res.send({ err: `${err}` }).status(401);
    }
  } else {
    res.send("EROR - SET THE NEW PASSWORD").status(401);
  }
});

// DELETE
routes.delete("/delete/:id", verifyTokenAndAuthorization, async (req, res) => {
  const ParamsId = parseInt(req.params.id);
  try {
    const Deleteuser = await prisma.user.delete({
      where: {
        id: ParamsId,
      },
    });
    res.send(`User is deleted: ${Deleteuser.username}`).status(200);
  } catch (err) {
    res.send({ err: err }).status(401);
  }
});

//GET ALL USERS
routes.get("/users", async (req, res) => {
  try {
    //Take first five users
    const users = await prisma.user.findMany({ take: 5 });
    res.json(users).status(200);
  } catch (err) {
    res.send({ err: err }).status(401);
  }
});

//GET USER STATS
routes.get("/stats", async (req, res) => {
  const date = new Date();
  const LastYear = new Date(
    new Date().setFullYear(new Date().getFullYear() - 1)
  );
  try {
    const data = await prisma.user.findMany({
      where: {
        createdAt: { gte: LastYear },
      },
    });
    res.send(data);
  } catch (err) {
    res.json(err).status(500);
  }
});
module.exports = routes;
