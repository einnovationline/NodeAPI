const fs = require("fs")
const { getTodosLivros, getLivroId, modificaLivro, deleteLivro, inseriLivro } = require ("../servicos/livros.js")

function getLivros(req, res) {
    try {
        //console.log(JSON.parse(fs.readFileSync("livros.json")))
        const livros = getTodosLivros()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getLivro(req, res) {
    try {
        const id = req.params.id
        if(getLivroId(id) && Number(id)) {
            //console.log("if")
            const livro = getLivroId(id)
            res.send(livro)
        } else {
            //console.log("else")
            res.status(422)
            res.send("ID inválido!!!")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postLivro(req, res) {
    try {

        const id = req.params.id

        if(getLivroId(id) !== id) {
            if (req.body.nome) {
                const livroNovo = req.body
                console.log("if")
                inseriLivro(livroNovo)
                res.status(201)
                res.send('livro inserido com sucesso!')
            } else {
                //console.log("else")
                res.status(422)
                res.send("Nome do livro é obrigatório!!!")
            }
        } else {
            console.log("else")
            res.status(422)
            res.send("Id já existente!!!")
        }



    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchLivro(req, res){
    try {
        const id = req.params.id
        const body = req.body
        if(getLivroId(id) && Number(id)) {
            modificaLivro (body, id)
            res.send('livro modificado com sucesso!')
            } else {
            //console.log("else")
            res.status(422)
            res.send("ID inválido!!!")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteLivroController(req, res){
    try {
        const id = req.params.id
        if(getLivroId(id) && Number(id)) {
            deleteLivro(id)
            res.send('livro deletado com sucesso!')
        } else {
            //console.log("else")
            res.status(422)
            res.send("ID inválido!!!")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros, getLivro, postLivro, patchLivro, deleteLivroController
}