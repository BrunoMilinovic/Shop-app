const express = require("express");
const routes = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyIsAdmin,
} = require("../midellwares/Verifytoken");

//CREATE Product
routes.post("/create/product", async (req, res) => {
  try {
    const product = await prisma.product.create({
      data: {
        title: req.body.title,
        desc: req.body.desc,
        size: req.body.size,
        color: req.body.color,
        price: req.body.price,
        img: req.body.img,
      },
    });
    res.json(product).status(200);
  } catch (err) {
    res.send(err).status(500);
  }
});

// UPDATE PRODUCT
routes.put("/update/:id", async (req, res) => {
  const ParamsId = parseInt(req.params.id);

  try {
    await prisma.product.update({
      where: {
        id: ParamsId,
      },
      data: {
        title: req.body.title,
        desc: req.body.desc,
        size: req.body.size,
        color: req.body.color,
        price: req.body.price,
        img: req.body.img,
      },
    });
    res.status(200).json("Product has been Updated");
  } catch (err) {
    res.json(err).status(401);
  }
});

//DELETE PRODUCT
routes.delete("/product/:id", async (req, res) => {
  const ParamsId = parseInt(req.params.id);

  try {
    const ProductDelete = await prisma.product.delete({
      where: {
        id: ParamsId,
      },
    });
    res.send(`Product: ${ProductDelete.title} is Deleted`).status(200);
  } catch (err) {
    res.json(err).status(401);
  }
});

// CREATE CATEGORY
routes.post("/categories/product", async (req, res) => {
  try {
    const cars = await prisma.categories.create({
      data: {
        NewCategories: req.body.NewCategories,
        name: req.body.name,
        CategoryId: req.body.CategoryId,
      },
    });
    res.json(cars);
  } catch (err) {
    res.send(err).status(500);
  }
});

//GET ALL PRODUCTS
routes.get("/find/allproducts", async (req, res) => {
  try {
    const ProductCategory = await prisma.product.findMany({
      select: {
        title: true,
        cat: {
          select: {
            NewCategories: true,
          },
        },
      },
    });
    res.json(ProductCategory).status(200);
  } catch (err) {
    res.json(err).status(401);
  }
});

module.exports = routes;
