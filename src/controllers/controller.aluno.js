import { create, findAll } from "../repositories/repository.alunos.js";

const Adicionar = (req, res) => {
  const aluno = req.body;

  try {
    const novoAluno = create(aluno);
    res.status(201).json(novoAluno);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao adicionar aluno", error: error.message });
  }
};

const Listar = (req, res) => {
  try {
    const alunos = findAll();
    res.status(200).json(alunos);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao listar alunos", error: error.message });
  }
};

export default { Listar, Adicionar };
