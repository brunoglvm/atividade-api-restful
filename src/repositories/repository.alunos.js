let alunos = [];

function getAlunos() {
    return alunos;
}

function getAlunoById(id) {
    return alunos.find(aluno => aluno.id === id);
}

function addAluno(aluno) {
    const newAluno = {
        id: aluno.id,
        nome: aluno.nome,
        email: aluno.email,
        nome_curso: aluno.nome_curso
    };
    alunos.push(newAluno);
}

function updateAluno(id, updatedAluno) {
    const index = alunos.findIndex(aluno => aluno.id === id);
    if (index !== -1) {
        alunos[index] = { ...alunos[index], ...updatedAluno };
    }
}

function deleteAluno(id) {
    alunos = alunos.filter(aluno => aluno.id !== id);
}

export { getAlunos, getAlunoById, addAluno, updateAluno, deleteAluno };