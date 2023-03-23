const express = require("express")
const rotaLivro = require("./rotas/livro")

const app = express()
app.use(express.json())//para a aplicação aceitar o body tipo json

app.use('/livros', rotaLivro)

const port = 8000

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`)
})