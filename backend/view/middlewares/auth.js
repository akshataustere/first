const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers('Authorization');
  const token = authHeader && authHeader?.split(' ')[1];

  if (token == null) return res.sendStatus(401); // No token found

  jwt.verify(token, process.env.JWT_Token, (err, user) => {
    if (err) return res.sendStatus(403); 
    req.user = user;
    next(); 
  });
};

module.exports = { authenticateToken };
