import { v4 as uuidv4 } from "uuid";

class AlunoRepository {
  constructor() {
    this.alunos = [];
  }

  // Criar
  create(aluno) {
    const emailExistente = this.alunos.find((a) => a.email === aluno.email);
    if (emailExistente) {
      throw new Error("Email já cadastrado");
    }

    const newAluno = {
      id: uuidv4(),
      nome: aluno.nome,
      email: aluno.email,
      nome_curso: aluno.nome_curso,
    };
    this.alunos.push(newAluno);
    return newAluno;
  }

  // Listar todos
  findAll() {
    return this.alunos;
  }

  // Listar por ID
  findById(id) {
    return this.alunos.find((aluno) => aluno.id === id) || null;
  }

  // Editar
  update(id, { nome, email, nome_curso }) {
    const index = this.alunos.findIndex((aluno) => aluno.id === id);
    if (index === -1) {
      return null;
    }
    this.alunos[index] = {
      id,
      nome,
      email,
      nome_curso,
    };
    return this.alunos[index];
  }

  // Deletar
  deleteById(id) {
    const index = this.alunos.findIndex((aluno) => aluno.id === id);
    if (index === -1) {
      return null;
    }
    const [deletedAluno] = this.alunos.splice(index, 1);
    return deletedAluno;
  }
}

export default new AlunoRepository();
