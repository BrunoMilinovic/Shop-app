const express = require("express");
const routes = express.Router();
const bcrypt = require("bcrypt");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// register a User
routes.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const Newuser = await prisma.user.create({
      data: {
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
      },
    });
    res.send({ status: "ok" }).status(200);
  } catch (err) {
    res.send({ error: `${err}` }).status(500);
  }
});

//Login

routes.post("/login", async (req, res) => {
  try {
    const FindUser = await prisma.user.findUnique({
      where: {
        username: req.body.username,
      },
    });

    !FindUser && res.json("wrong credentials").status(401);
    FindUser &&
      bcrypt.compare(req.body.password, FindUser.password, (err, data) => {
        //if error than throw error
        if (err) throw err;

        //if both match than you can do anything
        if (data) {
          const { password, ...others } = FindUser;
          return res.status(200).json({ msg: "Login success", ...others });
        } else {
          return res.status(401).json({ msg: "Invalid credencial" });
        }
      });
  } catch (err) {
    res.send({ err: "wrong credientals password or username" });
  }
});

module.exports = routes;
