import express from 'express'
import session from 'express-session'
import cors from 'cors'
import 'dotenv/config'

// Controller
import authController from './controller/authController.js'
import memberController from './controller/memberController.js'
import boardgameController from './controller/boardgameController.js'
import eventController from './controller/eventController.js'
import participateController from './controller/participateController.js'
import personController from './controller/personController.js'
import publicController from './controller/publicController.js'
import activityController from './controller/activityController.js'
import competitionController from './controller/competitionController.js'
import reservationController from './controller/reservationController.js'
import playController from './controller/playController.js'
import recordController from './controller/recordController.js'

// Middleware
import authMiddleware from './middleware/authMiddleware.js'

const app = express()
const port = 3000

const allowlist = ['http://localhost:5173']
const corsOptionsDelegate = function (req, callback) {
  let corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true, credentials: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}
app.use(cors(corsOptionsDelegate))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(session({
    secret: 'SIIT Tabletop Club',
    resave: false,
    saveUninitialized: true
}))

app.get('/', (req, res) => { res.send("SIIT Tabletop Club Backend") })

// Authentication
app.post('/login', authController.login)
app.post('/logout', authController.logout)

// Members
app.get('/member', memberController.getAll)
app.get('/member/:id', authMiddleware.notLoggedIn, memberController.get)
app.post('/member', memberController.post)
app.put('/member/:id', memberController.put)
app.delete('/member/:id', memberController.del)

//Boardgame
app.get('/boardgame', boardgameController.getAll)
app.get('/boardgame/:id', boardgameController.get)
app.post('/boardgame', boardgameController.post)
app.put('/boardgame/:id', boardgameController.put)
app.delete('/boardgame/:id', boardgameController.del)

//Event
app.get('/event', eventController.getAll)
app.get('/event/:id', eventController.get)
app.post('/event', eventController.post)
app.put('/event/:id', eventController.put)
app.delete('/event/:id', eventController.del)

//Participate
app.get('/participate', participateController.getAll)
app.get('/participate/:id', participateController.get)
app.get('/participate/event/:id', participateController.getBye)
app.post('/participate', participateController.post)
app.delete('/participate', participateController.del)

// Person
app.get('/person', personController.getAll)
app.get('/person/:id', personController.get)
app.post('/person', personController.post)
app.put('/person/:id', personController.put)
app.delete('/person/:id', personController.del)

//Public Participate
app.get('/public', publicController.getAll)
app.get('/public/:id', publicController.get)
app.get('/public/event/:id', publicController.getBye)
app.post('/public', publicController.post)
app.delete('/public', publicController.del)

//Activity
app.get('/activity', activityController.getAll)
app.get('/activity/:id', activityController.get)
app.post('/activity', activityController.post)
app.put('/activity/:id', activityController.put)
app.delete('/activity/:id', activityController.del)

//Competition
app.get('/competition', competitionController.getAll)
app.get('/competition/:id', competitionController.get)
app.get('/competition/game/:id', competitionController.getByGame)
app.post('/competition', competitionController.post)
app.delete('/competition', competitionController.del)

// Reservation
app.get('/reservation', reservationController.getAll)
app.get('/reservation/:id', reservationController.get)
app.get('/reservation/member/:id', reservationController.getByStd)
app.get('/reservation/game/:id', reservationController.getByGame)
app.post('/reservation', reservationController.post)
app.put('/reservation/:id', reservationController.put)
app.delete('/reservation/:id', reservationController.del)

// Play
app.get('/play', playController.getAll)
app.get('/play/:id', playController.getByStd)
app.get('/play/game/:id', playController.getByGame)
app.get('/play/date/:id', playController.getByDate)
app.post('/play', playController.post)
app.put('/play', playController.put)
app.delete('/play', playController.del)

// Record
app.get('/record', recordController.getAll)
app.get('/record/:id', recordController.getByStd)
app.get('/record/game/:id', recordController.getByGame)
app.get('/record/date/:id', recordController.getByDate)
app.post('/record', recordController.post)
app.put('/record', recordController.put)
app.delete('/record', recordController.del)

app.use('*', (req, res) => { res.send("ERROR 404: Endpoint not found") })

app.listen(port, () => {
    console.log(`SIIT Tabletop Club backend is hosting on http://localhost:${port}`)
})