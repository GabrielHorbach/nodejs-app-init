const UserController = {
  lista(req, res) {
    // busca usuarios no banco
    res.send(users)
  },
  criar(req, res) {
    UserService.valiadte(req)
    UserService.create()
  },
  editar(req, res) {
    const { id } = req.params
  }
}