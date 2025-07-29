
import { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, deletaLivroPorId } from '../Services/livroServices.js';

export const getLivros = (req, res) => {
    try {
        const livros = getTodosLivros();
        res.send(livros);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getLivro = (req, res) => {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            const livro = getLivroPorId(id)
            res.send(livro)

        } else {
            res.status(422)
            res.send("Id Inválido")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const postLivro = (req, res) => {
    try {
        const livroNovo = req.body;
        if (req.body.nome) {
            insereLivro(livroNovo);
            res.status(201).json(livroNovo);
        } else {
            res.status(422)
            res.send("O campo nome é obrigatório")
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export const patchLivro = (req, res) => {
    try {
        const id = req.params.id
        const body = req.body
        if (id && Number(id)) {
            modificaLivro(body, id)
            res.send("Livro modificado com sucesso");
        } else {
            res.status(422)
            res.send("Id inválido")
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
};
export const deletaLivro = (req, res) => {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            deletaLivroPorId(id)
            res.send("livro deletado com sucesso")
        } else {
            res.status(422)
            res.send("Id inválido")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
};