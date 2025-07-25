import express from 'express'
import routerLivros from './routes/livrosRouter'

const app = express()
app.use(express.json())

const port = 8000



app.use('/livros', routerLivros);


app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})