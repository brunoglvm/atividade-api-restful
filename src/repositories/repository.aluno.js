import { v4 as uuidv4 } from "uuid";

const alunos = [];

// Criar
const create = (aluno) => {
  const newAluno = {
    id: uuidv4(),
    nome: aluno.nome,
    email: aluno.email,
    nome_curso: aluno.nome_curso,
  };
  alunos.push(newAluno);
  return newAluno;
};

// Listar
const findAll = () => {
  return alunos;
};

const findById = (id) => {
  return alunos.find((aluno) => aluno.id === id) || null;
};

// Editar
const update = (id, { nome, email, nome_curso }) => {
  const index = alunos.findIndex((aluno) => aluno.id === id);
  if (index === -1) {
    return null;
  }
  alunos[index] = {
    id,
    nome,
    email,
    nome_curso,
  };

  return alunos[index];
};

// Deletar
const deleteById = (id) => {
  const index = alunos.findIndex((aluno) => aluno.id === id);
  if (index !== -1) {
    const deletedAluno = alunos.splice(index, 1);
    return deletedAluno[0];
  }
  return null;
};

export { create, findAll, findById, update, deleteById };
