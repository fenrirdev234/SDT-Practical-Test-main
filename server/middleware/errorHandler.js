const errorHandler = (error, req, res, next) => {
  console.error(error.message);

  if (error.name === "ValidationError") {
    return res.status(400).json({ error: error.message });
  } else if (error instanceof URIError) {
    res.status(400).json({ error: error.message });
  }

  next(error);
};

// Middleware to catch URIError
/* app.use((err, req, res, next) => {
  if (err instanceof URIError) {
    res.status(400).send("Bad Request: Invalid URL encoding");
  } else {
    next(err);
  }
}); */

module.exports = errorHandler;
