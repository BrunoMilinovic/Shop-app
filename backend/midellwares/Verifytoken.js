const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.JWT, (err, user) => {
      if (err) {
        res.status(403).json("Token is not valid");
      }

      // req.user mogu koristiti di iman ovaj midelware
      // mogu pristupit id i isAdmin
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("you are not autentiuficated");
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (
      req.user.id === req.params.id ||
      req.user.isAdmin === "DEVELOPER" ||
      "ADMIN"
    ) {
      next();
    } else {
      return res.status(403).json("not allowed");
    }
  });
};
const verifyIsAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin === ("DEVELOPER" || "ADMIN")) {
      next();
    } else {
      return res.status(403).json("User is not allowed");
    }
  });
};
module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyIsAdmin,
};
