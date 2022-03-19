const express = require("express");
const routes = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
// CREATE A Cart (one big group of products)
routes.post("/create", async (req, res) => {
  try {
    const cart = await prisma.cart.create({
      data: {
        userId: req.body.userId,
        // napravit relaciju
      },
    });
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
});
// CREATE A CartProducts (group of products)
routes.post("/cartproducts", async (req, res) => {
  try {
    const carts = await prisma.cartProducts.create({
      data: {
        productId: req.body.productId,
        quantity: req.body.quantity,
        ProductsId: req.body.ProductsId,
      },
    });
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = routes;
