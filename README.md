# API RESTful para Gestão de Alunos

<div>
    <img src="https://img.shields.io/badge/cepedi-%23032c66.svg?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAAA0CAMAAAAE725BAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAspQTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////rLOzp6+ztbzDtbvCtLrBs7nAsLe+s7e/tLm+r7a9qr+/////////pauut73GtLzDtLvCs7rBtLnBs7nBs7m/sre+qKiuq7GztbzFtLvDs7vCtbrBsbi/srnCn7+/tLzCtbzDtLnAtrvDsbnAsLW9tLvCs7rA09nis7rCxs7Ukpmgs7rBs7rCr7a9ucDIy87VtLrAtLrAs7rAs7rAs7vAsrnAtbrCuL/Hrbe8zMzMpa21p7K1tLvCt77Fb292////mczMuMDHnKGm////rLq/t77G////////r7e/srnAtbzD////////////////////////////////srnAtLvA////////s7q+////////////////////////////////////////////////////////////sbjArra8trvCsba9r7i+tr3ErbW6tra2naGlsbW7t77GsrrBsbe+s7rBs7rAs7nBs7nAsri/tLjBtb3Esrm/sLe+w8vTyczPtLrBvcXNm5+mxMnPtrvDtL3CtrvDp6+1pK22vMPKwsrQt7zEtLvDrbW8rbW8sLe+gID/usHInKGnpamwzdbdsLW7tbnAtLvCsre8tLrCoqywqrO4tb29qqrVydDXh4ySxs3UoaiunaWqtbrBytHYmaCmsbjAvMPLqbG3r7i/usHJsbi/tb3DprKyrrO6uL/Gtr7Ftr7FrLOzpqamtb3FrrW8tbrBsbjAsrrAsrnAp62zn6+v+NZ4ZwAAAO50Uk5TABJCeJyzydvn7O3r2bV6DgRirvP/6Cjgw6y4fksT+uStOnmbTy0jIiQYArr0PH3yR/FKJUBMT05NR0AzIwzwTVjM////78igailb/////9BxCN/////kZOf/leD/lPr///9JutXU09jn///eBR9g2/8nRQX/aoBcjvlGQP+QbLZQQT9ANyBJjgpdSmWfjki9luNblKa0wcJqCUFb/4zP/2cHQcD//yeQp6WlqLz/3v//S9//oKn3cOCDHP///+jFiUoC/+5xcHFxcGdcRzYfBv/a/+Dg4f/i6v/ryP//wivs///pKBSAutXh1bp/EAdlNeoAAAKhSURBVHicY2SAAkYYYEAHEOGPGOJIKsCkAFbdqCa9ImCIINtfvCaAAMsL/IZI/iZoBAPD/7d4DZH6RYQZDJ9/4jNEGo8sEuB4gscQ2e+EDeACBvt9PPKMSp+QePygWPqPpoTpPxPjNbyWMGq/hLMlGC8TdhVWQ8QRsSt1iTwzGBj1n8LZMhfINcTwMZwtdw5Vzhh7OoZkg8PIInaIMNM+iKzWAW9WABu0nZAhXoyMPzjxRD/XVwZuoDnr8RoSxMj4AbcRYPBf6J0w40p8hkQwviZgBtgcBvFleAyJfompBRuQYFyM25C4Z3jsl0FKF4yM83AakowrakDRcgtJTo1xKnJiQ08nuEAOKD9+g/F0gMYiJba4PuIMAYLijy/h0W/AyMjOC5dJ6iLaEIby63CnSEsy8rLDJVIZ24g2pPoknGnByFg3DUkqu78IMzwZ/zEzVqMLtu1DsJ0ZO6Z9Q1eABXxqLkcV6NqFbAhDdycRhjAwlKKagmYIQ08HMYYwo6ZgdEMYetuJMASt3sEwhKGv6w9BQ6oLCRjCwNDEV87LgA/UfkGNIGyGAIFqbk0rI+Mvdsws8/9l6xTGdFQx1CjGaz9uMGsVnGlBoEGBG8xmXAFj/osm15B5jEthTH5fsgxZCCpT5sN40u44DVmOp1Daw2F7/gSMz5EUhNMQF5zu+A+s8hHashkZ/XEasmkSTlNQQD6jDwOFhvw3dPRmoNCQaHFGTwZKDIne8gsYHm4MxBmSzcP4eSqyFOf3yjbGKlA020EEiDCkHtwCQBQ6lZC2hSFCLRGG9DDq41JEvCF9jLpUMIRJZ0ANuZoPY01i1CTXkBvZMKmpjGrkGnKbcQE0o85kVCLXkPuMjGemA7Mrfz8jowy5hjA8BTdBQYQwATMYAPM0qqgaKO97AAAAAElFTkSuQmCC&logoColor=white" alt="Badge CEPEDI">
    <img src="https://img.shields.io/badge/RESTIC36-844bda.svg?style=for-the-badge" />
    <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Badge Express.js">
</div>

Projeto desenvolvido com **Express**, voltado para a gestão de alunos. A API permite realizar todas as operações de **CRUD**, mantendo os dados em memória durante a execução.

## Pré-requisitos

Para rodar o projeto, você precisará das seguintes ferramentas e versões:

- **Node.js: 16.x ou superior**
- **npm: 8.x ou superior / Yarn: 1.x ou superior**

## Instalação

Siga os passos abaixo para rodar o servidor localmente:

**Clone o repositório:**

```
git clone <URL do repositório>
```

**Navegue até o diretório:**

```
cd <nome do diretório>
```

**Instale as dependências:**

```bash
# usando npm
npm install
# usando yarn
yarn install
```

**Inicie o servidor:**

```bash
# usando npm
npm start
# usando yarn
yarn start
```

## Endpoints

### Criar Aluno

`POST /alunos`
Cria um novo aluno.

**Corpo da Requisição:**

```json
{
  "nome": "Lucas Ferreira",
  "email": "lucasf@email.com",
  "nome_curso": "Desenvolvimento Back-end"
}
```

---

### **Listar Alunos**

`GET /alunos`
Retorna todos os alunos cadastrados.

`GET /alunos/:id`
Retorna um aluno específico.

---

### **Atualizar Aluno**

`PUT /alunos/:id`
Atualiza as informações de um aluno existente.

**Corpo da Requisição:**

```json
{
  "nome": "Lucas Ferreira",
  "email": "lucasf808@email.com",
  "nome_curso": "Desenvolvimento Front-end"
}
```

---

### **Deletar Aluno**

`DELETE /alunos/:id`
Remove um aluno pelo ID.
