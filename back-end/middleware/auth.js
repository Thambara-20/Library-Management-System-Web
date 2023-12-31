const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.header("x-auth-token");
  
  if (!token) return res.status(401).send("Access denied. No token provided.");
  
  try {
    const decodedPayload = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
    req.user = decodedPayload;
    
    next();
  } catch (ex) {
    res.status(401).send("Invalid token.");
  }
}

module.exports = auth;