import { Router } from "express";
import AlunoController from "../controllers/controller.aluno.js";

const router = Router();

router.post("/alunos", AlunoController.toAdd);
router.get("/alunos", AlunoController.toList);
router.get("/alunos/:id", AlunoController.toList);
router.put("/alunos/:id", AlunoController.toUpdate);
// router.delete("/alunos/:id", AlunoController.toDelete);

export default router;
