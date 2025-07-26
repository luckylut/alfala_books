import fs from 'fs'

function getTodosLivros (){
    return JSON.parse(fs.readFileSync("livros.json"))
}
function getLivroPorld(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const livroFiltrado = livros.filter(livro => livro.id ===id) [0]
    return livroFiltrado
}

function insereLivro(LivroNovo){
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    const novaListaDeLlivros = [...livros, LivroNovo];
    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLlivros));

}

function modificaLivro(modificacoes, id){
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"));
    const indiceModificado = livroAtuais.findIndex(livro => livro.id === id);
    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes}
    livrosAtuais[indiceModificado] = conteudoMudado;
    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais));
};

function deleteLivroPorld(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    const livroFiltrado = livros.filter(livro => livro.id !==id)
    fs.writeFileSync("livros.json", JSON.stringify(livrosFiltrados));
}

export { getTodosLivros, getLivroPorld, insereLivro, modificaLivro, deleteLivroPorld }
