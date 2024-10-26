import { Router } from "express";
import controllerAluno from "./controllers/controller.aluno.js";

const router = Router();

router.get("/alunos", controllerAluno.Listar);
router.post("/alunos", controllerAluno.Adicionar);
router.put("/alunos/:id", controllerAluno.Editar);

export default router;
