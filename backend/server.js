const express = require("express");
const app = express();
const dotnev = require("dotenv");
const cors = require("cors");
const userRoute = require("./routes/user.js");
const authRoute = require("./routes/auth.js");
app.use(express.json());
dotnev.config();
app.use(cors());

//routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1", userRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}..`);
});
