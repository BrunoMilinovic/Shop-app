const express = require("express");
const routes = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = routes;
