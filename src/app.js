import "dotenv/config";
import express from "express";
import { configCors } from "./middlewares/cors.config.js";
import { configHelmet } from "./middlewares/helmet.config.js";
import { sequelize } from "./db/database.js";
import { seedDatabase } from "./db/database_initialization.js";

const app = express();
const port = process.env.API_PORT;

app.get("/dev", (req, res) =>
  res.status(200).json({ message: "servidor em desenvolvimento" }),
);

app.use(express.json());
app.use(configCors);
app.use(configHelmet);

sequelize.sync({ alter: true, force: true }).then(() => {
  seedDatabase().then(() => {
    app.listen(port, () =>
      console.log(`Servidor rodando em http://localhost:${port}`),
    );
  });
});
