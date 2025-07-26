
import { getTodosLivros, getLivroPorld, insereLivro, modificaLivro, deletaLivro } from "../services/livrosServices.js";

export const getLivros = (req, res) => {
    try {
        const livros = getTodosLivros();
        res.send('livros');
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getLivro = (req, res) => {
    try {
        const id = req.params.id
        const livro = getLivroPorld(id)
        res.send(livro)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const postLivro = async (req, res) =>{
    try{
        const LivroNovo = req.body;
        await insereLivro(LivroNovo);
        res.status(201).json(LivroNovo)
    }catch{
        res.status.status(500).send(error.message);
    }
}

export const patchLivro = async (req, res) => {
    try {
        const id = req.param.id
        const body = req.body
        modificaLivro(body, id)
        res.send("Livro modificado com sucesso")
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export const deletaLivro = (req, res) => {
    try {
        const id = req.params.id
        deletaLivroPorId(id)
        res.send("livro deletado com sucesso")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
};