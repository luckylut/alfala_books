export const getLivros = (req, res) => {
    try {
        res.send('Lista de Livros');
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};