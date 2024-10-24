import express from "express";
import cors from "cors";
import router from "./routes.js";

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(3001, () => {
  console.log(`Servidor rodando na porta ${port}`);
});