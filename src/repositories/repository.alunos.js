import { v4 as uuidv4 } from "uuid";

const alunos = [];

// Criar
export function create({ nome, email, nome_curso }) {
  // Usando exportação nomeada
  const aluno = {
    id: uuidv4(),
    nome,
    email,
    nome_curso,
  };

  alunos.push(aluno);
  return aluno;
}

// Listar
export function findAll() {
  return alunos;
}
