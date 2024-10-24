import express from "express";
import cors from "cors";
import helmet from "helmet";
import router from "./routes.js";

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(router);

app.listen(port, () => {
  console.log(`Servidor rodando em: http://localhost:${port}/alunos`);
});
