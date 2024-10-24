import { v4 as uuidv4 } from "uuid";

const alunos = [];

// Criar
function create(aluno) {
  const newAluno = {
    id: uuidv4(),
    nome: aluno.nome,
    email: aluno.email,
    nome_curso: aluno.nome_curso,
  };
  alunos.push(newAluno);
  return newAluno;
}

// Listar
function findAll() {
  return alunos;
}

export { create, findAll };
