import express from 'express';
import { getLivros, getLivro, postLivro, patchLivro, deletaLivro } from '../Controllers/LivroControllers.js';
import { deleteLivroPorld } from '../services/livrosServices.js';
const router = express.Router();

router.get('/', deletaLivro);
router.get('/', patchLivro);
router.get('/', postLivro);
router.get('/:id', getLivros);
router.get('/:id', getLivro)
  
router.patch('/', (req, res) => {

    res.send('Você fez uma requisição do tipo PATCH');
});


router.delete('/', (req, res) => {

    res.send('Você fez uma requisição do tipo DELETE');
});


export default router;


