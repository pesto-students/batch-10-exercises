module.exports = function authenticateUser(req, res, next) {
  const movieList = ['The Butterfly Effect', 'Jason Bourne'];
  console.log("req.headers.authorization", req.headers.authorization);
  if (req.headers.authorization) {
    next();
  } else if(checkDb) {
    // return unauthorized
    res.send(403, "No Credentials Sent");
  }else {
    // return unauthorized
    res.send(401, "Not Authenticated");
  }
  next();
};

