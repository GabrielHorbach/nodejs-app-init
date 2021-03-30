// Importa o express para o app
const express = require('express')

// Cria o app com o express
const app = express()
app.use(express.json()) // Informa ao app que as informações trafegam em JSON

// Adicionar 1 rota
// GET, POST, PUT, DELETE -> VERBOS HTTP -> REST API
// HTTP CODE -> 200, 500, 401, 404, ...
// GET /users -> listar todos usuarios
// POST /users -> criar um usuario
// PUT /users/3 -> edição do usuário com id 3
// DELETE /users/4 -> remoção do usuário com id 4

const UserController = require('./controllers/UserController')

const users = [
  { id: 1, name: 'Gabriel', phone: '51999999999', email: 'gabriel@teste.com' },
  { id: 2, name: 'Jeorge', phone: '51999999999', email: 'jeorge@teste.com' }
]

app.get('/users', UserController.lista)
app.post('/users', UserController.criar)
app.put('/users/:id', UserController.editar)

// Configura a porta que o servidor fica rodando
app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000')
})