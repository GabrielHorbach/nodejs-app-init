//validate
if (!req.body.name || !req.body.phone || !req.body.email) {
  return res.status(400).send({ message: 'Alguns dos campos obrigatórios não foram enviados' })
}

const { name, phone, email } = req.body

// salvar no banco
users.push({
  id: users.length + 1,
  name,
  phone,
  email
})

res.send(users)