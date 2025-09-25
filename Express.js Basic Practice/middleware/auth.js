export const userAuth = (req, res, next) => {
  const role = req.headers["role"];
  if (!role) {
    return res.status(401).json({ error: "Role header is required" });
  }
  req.userRole = role;
  next();
};

export const authorize = (roles = []) => (req, res, next) => {
  if (!roles.includes(req.userRole)) {
    return res.status(403).json({ error: "Access denied" });
  }
  next();
};
