const fs =  require("fs")

const livros = JSON.parse( fs.readFileSync("livros.json"))

function getTodosLivros(){
    return JSON.parse( fs.readFileSync("livros.json") )
}

function getLivroId(id){
    //const livros = JSON.parse( fs.readFileSync("livros.json"))
    const livroFiltrado = livros.filter( livro => livro.id === id ) [0]//ao inserir um [0] à frente de livros.filter(), informando assim que o livro filtrado na posição 0 do arranjo será sempre o único resultado possível. 
    //console.log(livroFiltrado)
    return livroFiltrado
}

function inseriLivro(livroNovo) {
    //const livros = JSON.parse(fs.readFileSync("livros.json"))
    //console.log("inseriLivro")
    const novaListaLivros = [...livros, livroNovo]
    fs.writeFileSync("livros.json", JSON.stringify(novaListaLivros))
}

function modificaLivro(mofificacoes, id){
    let livrosAtuais = livros
    const indiceAModificar = livrosAtuais.findIndex(livro => livro.id === id)
    const conteudomudado = {...livrosAtuais[indiceAModificar], ...mofificacoes}
    livrosAtuais[indiceAModificar] = conteudomudado

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}

function deleteLivro(id){
    //console.log(livros)
    //console.log(id)
    const livrosFiltrado = livros.filter( livro => livro.id !== id )  
    //console.log(livrosFiltrado)
    fs.writeFileSync("livros.json", JSON.stringify(livrosFiltrado))
}

module.exports = {
    getTodosLivros, getLivroId, inseriLivro, modificaLivro, deleteLivro
}
