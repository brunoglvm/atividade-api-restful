import { getAlunos, getAlunoById, addAluno, updateAluno, deleteAluno } from "../repositories/repository.alunos.js";

function Listar(req, res) {
  res.status(200).json(getAlunos());
}

function BuscarPorId(req, res) {
  const id = parseInt(req.params.id, 10);
  const aluno = getAlunoById(id);
  if (aluno) {
    res.status(200).json(aluno);
  } else {
    res.status(404).send("Aluno não encontrado");
  }
}

function Adicionar(req, res) {
  const aluno = req.body;
  addAluno(aluno);
  res.status(201).send("Aluno adicionado com sucesso");
}

function Atualizar(req, res) {
  const id = parseInt(req.params.id, 10);
  const updatedAluno = req.body;
  updateAluno(id, updatedAluno);
  res.status(200).send("Aluno atualizado com sucesso");
}

function Deletar(req, res) {
  const id = parseInt(req.params.id, 10);
  deleteAluno(id);
  res.status(200).send("Aluno deletado com sucesso");
}

export default { Listar, BuscarPorId, Adicionar, Atualizar, Deletar };