const {v4: uuidv4} = require('uuid')

const alunos = [];

//criar
function create(descricao, titulo, dataCadastro, telefone, empresa) {
    const vaga = {
        id: uuidv4(),
        nome,
        email,
        nome_curso,
    }

    alunos.push(alunos)
    return alunos
}

//listar
function findAll(){
    return alunos
}

module.exports = {
    create,
    findAll
}