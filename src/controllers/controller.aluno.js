import AlunoRepository from "../repositories/repository.aluno.js";

class AlunoController {
  // Adiciona um novo aluno
  static toAdd(req, res) {
    const { nome, email, nome_curso } = req.body;

    if (!nome || !email || !nome_curso) {
      return res
        .status(400)
        .json({ message: "Algo de errado, não está certo!" });
    }

    try {
      const novoAluno = AlunoRepository.create({ nome, email, nome_curso });
      res.status(201).json(novoAluno);
    } catch (error) {
      if (error.message === "Email já cadastrado") {
        return res.status(400).json({ message: "Email já cadastrado" });
      }
      res.status(500).json({ message: "Erro ao adicionar aluno" });
    }
  }

  // Lista todos os alunos ou um aluno específico por ID
  static toList(req, res) {
    try {
      const { id } = req.params;
      if (id) {
        const aluno = AlunoRepository.findById(id);
        if (aluno) {
          return res.status(200).json(aluno);
        } else {
          return res.status(404).json({ message: "Aluno não encontrado" });
        }
      }

      const alunos = AlunoRepository.findAll();
      if (alunos.length === 0) {
        return res.status(200).json({ message: "Nenhum aluno cadastrado." });
      }
      res.status(200).json(alunos);
    } catch (error) {
      res.status(500).json({ message: "Erro ao listar alunos" });
    }
  }

  // Atualiza os dados de um aluno existente com base no ID fornecido
  static toUpdate(req, res) {
    const { id } = req.params;
    const { nome, email, nome_curso } = req.body;

    if (!nome || !email || !nome_curso) {
      return res
        .status(400)
        .json({ message: "Algo de errado, não está certo!" });
    }

    try {
      const aluno = AlunoRepository.update(id, { nome, email, nome_curso });
      if (!aluno) {
        return res.status(404).json({ message: "Aluno não encontrado!" });
      }
      res.json(aluno);
    } catch (error) {
      res.status(500).json({ message: "Erro ao atualizar aluno" });
    }
  }

  // Deleta os dados de um aluno existente com base no ID fornecido
  static toDelete(req, res) {
    const { id } = req.params;
    if (id) {
      const alunoDeletado = AlunoRepository.deleteById(id);
      if (alunoDeletado) {
        res.status(200).json({ message: "Aluno deletado com sucesso." });
      } else {
        res.status(404).json({ message: "Aluno não encontrado." });
      }
    } else {
      res.status(400).json({ message: "ID do aluno não fornecido." });
    }
  }
}

export default AlunoController;
