import express from 'express'
import cors from 'cors'
import 'dotenv/config'

// Controller
import memberController from './controller/memberController.js'

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => { res.send("SIIT Tabletop Club Backend") })

// Members
app.get('/members', memberController.getAll)
app.get('/members/:id', memberController.get)
app.post('/members', memberController.post)
app.put('/members/:id', memberController.put)
app.delete('/members/:id', memberController.del)

app.use('*', (req, res) => { res.send("ERROR 404: Endpoint not found") })

app.listen(port, () => {
    console.log(`SIIT Tabletop Club backend is hosting on http://localhost:${port}`)
})