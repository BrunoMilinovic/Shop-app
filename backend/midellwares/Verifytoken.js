const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, "JWTSECRET", (err, user) => {
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
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return res.staus(403).json("not allowed");
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
};
