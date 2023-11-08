import express from 'express'
import cors from 'cors'

// Controller
import memberController from './controller/memberController.js'

const app = express()
const port = 3000

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => { res.send("SIIT Tabletop Club Backend") })

app.get('/member', memberController.getAll)
app.get('/member/:id', memberController.get)
app.post('/member', memberController.post)
app.delete('/member/:id', memberController.del)

app.use('*', (req, res) => { res.send("ERROR 404: Endpoint not found") })

app.listen(port, () => {
    console.log(`SIIT Tabletop Club backend is hosting on http://localhost:${port}`)
})