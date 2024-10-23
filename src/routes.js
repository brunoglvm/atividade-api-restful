import { Router } from 'express';
import controllerAluno from "./controllers/controller.aluno.js";

const router = Router();

router.get("/alunos", controllerAluno.Listar)

export default router;