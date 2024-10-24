import { Router } from 'express';
import controllerAluno from "./controllers/controller.aluno.js";

const router = Router();

router.get("/alunos", controllerAluno.Listar);
router.get("/alunos/:id", controllerAluno.BuscarPorId);
router.post("/alunos", controllerAluno.Adicionar);
router.put("/alunos/:id", controllerAluno.Atualizar);
router.delete("/alunos/:id", controllerAluno.Deletar);

export default router;