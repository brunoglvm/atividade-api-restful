import { create, findAll, update } from "../repositories/repository.alunos.js";

const toAdd = (req, res) => {
  const {nome, email, nome_curso} = req.body;

  if(!nome || !email || !nome_curso){
    res.status(400).json({message: "Algo de errado, não está certo!"})
  }

  try {
    const novoAluno = create({nome, email, nome_curso});
    res.status(201).json(novoAluno);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao adicionar aluno", error: error.message });
  }
};

const toList = (req, res) => {
  try {
    const alunos = findAll();
    res.status(200).json(alunos);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao listar alunos", error: error.message });
  }
};

const toUpdate = (req, res) => {
  const {id} = req.params;
  const {nome, email, nome_curso} = req.body;

  if(!nome || !email || !nome_curso){
    res.status(400).json({message: "Algo de errado, não está certo!"})
  }

  try {
    const aluno = update(id, {nome, email, nome_curso})
    if(!aluno){
      return res.status(404).json({message: 'Aluno não encontrado!'})
    }
    res.json(aluno)
  } catch (error) {
    res.status(500).json({message: 'Erro ao atualizar o aluno!'})
  }
  
};

export default { toList, toAdd, toUpdate };
