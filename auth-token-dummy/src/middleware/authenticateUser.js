module.exports = function authenticateUser(req, res, next) {

  console.log("req.headers.authorization", req.headers.authorization);
  if (req.headers.authorization) {
    req.authenticatedUser = true;
    if(checkDb) {
      
    }else{
      req.authenticatedUser = "Invalid token";
    }
    next();
  } else {
    req.authenticatedUser = "Not Authenticated";
  }
  next();
};

