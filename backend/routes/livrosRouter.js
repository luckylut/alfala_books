import express from 'express';
import { getLivros  } from '../controllers/livroControllers';
const router = express.Router();



router.get('/', getLivros)



router.post('/', (req, res) => {
  
    res.send('Você fez uma requisição do tipo POST');
});


router.patch('/', (req, res) => {

    res.send('Você fez uma requisição do tipo PATCH');
});


router.delete('/', (req, res) => {

    res.send('Você fez uma requisição do tipo DELETE');
});


export default router;


