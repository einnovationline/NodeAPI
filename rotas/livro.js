// livro.js

const { Router } = require("express")
const {getLivros, getLivro, postLivro, patchLivro, deleteLivroController} = require("../controladores/livro")

const router = Router()

router.get('/', getLivros)//lista geral tipo o show
router.get('/:id', getLivro)//busca por id

router.post("/", postLivro)//inserir

router.patch("/:id", patchLivro)//alterar

router.delete("/:id", deleteLivroController)


module.exports = router