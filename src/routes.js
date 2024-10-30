import { Router } from "express";
import controllerAluno from "./controllers/controller.aluno.js";

const router = Router();

router.post("/alunos", controllerAluno.toAdd);
router.get("/alunos", controllerAluno.toList);
router.get("/alunos/:id", controllerAluno.toList);
router.put("/alunos/:id", controllerAluno.toUpdate);
router.delete("/alunos/:id", controllerAluno.toDelete);

export default router;
