const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { login, createUser } = require("./controllers/users");
const auth = require("./middlewares/auth");
const userRouter = require("./routes/users");
const articleRouter = require("./routes/articles");
const { requestLogger, errorLogger } = require("./middlewares/logger");
const errorHandler = require("./errors/errorHandler");
const { celebrate, Joi } = require("celebrate");

const app = express();
app.use(cors());
const { PORT = 3001 } = process.env;

const { errors } = require("celebrate");

mongoose
  .connect("mongodb://127.0.0.1:27017/newsexplorerdb")
  .then(() => console.log("¡Conectado a newsexplorerdb!"))
  .catch((err) => console.error("Error de conexión:", err));

app.use(express.json());
app.use(requestLogger);

app.post(
  "/signup",
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required().min(1),
      name: Joi.string().required().min(2).max(30),
    }),
  }),
  createUser,
);

app.post(
  "/signin",
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    }),
  }),
  login,
);

app.use(auth);

app.use("/users", userRouter);
app.use("/articles", articleRouter);

app.use(errorLogger);

app.use(errors());

app.use((req, res) => {
  res.status(404).send({ message: "El recurso solicitado no fue encontrado" });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor corriendo magistralmente en el puerto ${PORT}`);
});
