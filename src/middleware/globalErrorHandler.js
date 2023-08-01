export const globalErrorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode ? err.statusCode : 500;
  const message = err.message;

  res.status(statusCode).json({ message });
};

// 404 error
export const notFound = (req, res, next) => {
  const err = new Error(`Route ${req.originalUrl} not found!`);
  next(err);
};
