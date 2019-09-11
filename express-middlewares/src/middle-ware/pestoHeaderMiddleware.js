const pestoHeaderMiddleware = (req, res, next) => {

    const requestedRoute = req.path;
    console.log(requestedRoute);
    res.setHeader("middleware-header", requestedRoute);
    next();
  }

  module.exports  = pestoHeaderMiddleware;