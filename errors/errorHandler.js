const errorHandler = (err, req, res, next) => {
  console.error(err);

  if (err.statusCode) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  if (err.name === "ValidationError") {
    return res.status(400).json({ message: "Datos inválidos" });
  }

  if (err.name === "CastError") {
    return res.status(400).json({ message: "ID inválido" });
  }

  if (err.code === 11000) {
    return res.status(409).json({ message: "Conflicto de datos" });
  }

  res.status(500).json({ message: "Error interno del servidor" });
};

module.exports = errorHandler;
