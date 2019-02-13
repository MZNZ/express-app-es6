import jwt from 'jsonwebtoken';

const verifyToken = (bypassAuthRoutes, jwtSecret) => {
  return (req, res, next) => {
    const url = req.url;
    const method = req.method.toLowerCase();
    const isBypassRoute = bypassAuthRoutes.filter(routeObj =>
      routeObj.url.test(url) && routeObj.method === method).length > 0;

    if (isBypassRoute) {
      next();
    } else {
      const token = req.headers.authorization;
      if (token) {
        jwt.verify(token, jwtSecret, (err, decoded) => {
          if (err) {
            return res.status(401).send('Not authenticated');
          } else {
            req.decoded = decoded;
            next();
          }
        });
      } else {
        return res.status(403).send('No token is received');
      }
    }
  };
};

export default verifyToken;