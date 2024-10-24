import express from "express";
import cors from "cors";
import router from "./routes.js";

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`O Servidor está rodando na porta ${port}`);
});
