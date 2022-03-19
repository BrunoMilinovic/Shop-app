const express = require("express");
const app = express();
const dotnev = require("dotenv");
const cors = require("cors");
const userRoute = require("./routes/user.js");
const authRoute = require("./routes/auth.js");
const productRoute = require("./routes/product.js");
const cartRoute = require("./routes/cart.js");
app.use(express.json());
dotnev.config();
app.use(cors());

//routes

app.use("/api/v1", userRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/shop", productRoute);
app.use("/api/v1/cart", cartRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}..`);
});
