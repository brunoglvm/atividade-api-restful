import express from "express";
import cors from "cors";
import router from "./routes.js";
import { create, findAll } from "./repositories/repository.alunos.js";

const app = express();
const port = 3001;

app.use(cors());
app.use(router);

//post
app.post("/alunos", (req, res) => {
  const { nome, email, nome_curso } = req.body;
  const vaga = create({ nome, email, nome_curso });
  res.status(201).json(alunos);
});

app.get("/alunos", (req, res) => {
  const alunos = findAll();
  res.json(alunos);
});

app.listen(port, () => {
  console.log(`O Servidor está rodando na porta ${port}`);
});
