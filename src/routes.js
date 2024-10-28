import { Router } from "express";
import controllerAluno from "./controllers/controller.aluno.js";

const router = Router();

router.get("/alunos", controllerAluno.toList);
router.get("/alunos/:id", controllerAluno.toList);
router.post("/alunos", controllerAluno.toAdd);
router.put("/alunos/:id", controllerAluno.toUpdate);

export default router;
