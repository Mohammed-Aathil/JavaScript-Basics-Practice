const logTimestamp = (req, res, next) => {
  const now = Date();
  console.log(`[${now}] Requested to: ${req.method} ${req.url}`);
  next();
};
export default logTimestamp;
