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
import coreMiddleware from './middleware/coreMiddleware.js'
import sameMiddleware from './middleware/sameMiddleware.js'

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
app.get('/member', coreMiddleware.coreCheck, memberController.getAll)
app.get('/member/:id', authMiddleware.notLoggedIn,sameMiddleware.sameUser, memberController.get)
app.post('/member', coreMiddleware.coreCheck, memberController.post)
app.put('/member/:id', authMiddleware.notLoggedIn,sameMiddleware.sameUser, memberController.put)
app.delete('/member/:id', coreMiddleware.coreCheck, memberController.del)

//Boardgame
app.get('/boardgame', boardgameController.getAll)
app.get('/boardgame/:id', boardgameController.get)
app.post('/boardgame', coreMiddleware.coreCheck, boardgameController.post)
app.put('/boardgame/:id', coreMiddleware.coreCheck, boardgameController.put)
app.delete('/boardgame/:id', coreMiddleware.coreCheck, boardgameController.del)

//Event
app.get('/event', eventController.getAll)
app.get('/event/:id', eventController.get)
app.post('/event', coreMiddleware.coreCheck, eventController.post)
app.put('/event/:id', coreMiddleware.coreCheck, eventController.put)
app.delete('/event/:id', coreMiddleware.coreCheck, eventController.del)

//Participate
app.get('/participate', coreMiddleware.coreCheck,participateController.getAll)
app.get('/participate/:id', authMiddleware.notLoggedIn,sameMiddleware.sameUser,participateController.get)
app.get('/participate/event/:id', authMiddleware.notLoggedIn,participateController.getBye)
app.post('/participate', coreMiddleware.coreCheck,participateController.post)
app.post('/participate/delete', coreMiddleware.coreCheck,participateController.del)

// Person
app.get('/person', coreMiddleware.coreCheck,personController.getAll)
app.get('/person/:id', coreMiddleware.coreCheck,personController.get)
app.post('/person', coreMiddleware.coreCheck,personController.post)
app.put('/person/:id', coreMiddleware.coreCheck,personController.put)
app.delete('/person/:id', coreMiddleware.coreCheck,personController.del)

//Public Participate
app.get('/public', coreMiddleware.coreCheck,publicController.getAll)
app.get('/public/:id', coreMiddleware.coreCheck,publicController.get)
app.get('/public/event/:id', authMiddleware.notLoggedIn,publicController.getBye)
app.post('/public', coreMiddleware.coreCheck,publicController.post)
app.post('/public/delete', coreMiddleware.coreCheck,publicController.del)

//Activity
app.get('/activity', activityController.getAll)
app.get('/activity/:id', activityController.get)
app.post('/activity', coreMiddleware.coreCheck, activityController.post)
app.put('/activity/:id', coreMiddleware.coreCheck, activityController.put)
app.delete('/activity/:id', coreMiddleware.coreCheck, activityController.del)

//Competition
app.get('/competition', competitionController.getAll)
app.get('/competition/:id', competitionController.get)
app.get('/competition/game/:id', competitionController.getByGame)
app.post('/competition', coreMiddleware.coreCheck, competitionController.post)
app.delete('/competition', coreMiddleware.coreCheck, competitionController.del)

// Reservation
app.get('/reservation', coreMiddleware.coreCheck, reservationController.getAll)
app.get('/reservation/:id', reservationController.get)
app.get('/reservation/member/:id', authMiddleware.notLoggedIn,sameMiddleware.sameUser,reservationController.getByStd)
app.get('/reservation/game/:id', authMiddleware.notLoggedIn,reservationController.getByGame)
// params for put and delete use r_id
app.post('/reservation', authMiddleware.notLoggedIn,reservationController.post)
app.put('/reservation/:id', authMiddleware.notLoggedIn, reservationController.put)
app.delete('/reservation/:id', authMiddleware.notLoggedIn,sameMiddleware.sameUser,reservationController.del)

// Play
app.get('/play', authMiddleware.notLoggedIn,playController.getAll)
app.get('/play/:id', authMiddleware.notLoggedIn, playController.getById)
app.get('/play/member/:id', authMiddleware.notLoggedIn,playController.getByStd)
// app.get('/play/game/:id', authMiddleware.notLoggedIn,playController.getByGame)
// app.get('/play/date/:id', authMiddleware.notLoggedIn,playController.getByDate)
app.post('/play', authMiddleware.notLoggedIn,playController.post)
app.put('/play/:id', authMiddleware.notLoggedIn,sameMiddleware.sameUser,playController.put)
app.delete('/play/:id', authMiddleware.notLoggedIn,sameMiddleware.sameUser,playController.del)

// Record
app.get('/record', authMiddleware.notLoggedIn,recordController.getAll)
app.get('/record/:id', authMiddleware.notLoggedIn, recordController.getByID)
app.get('/record/member/:id', authMiddleware.notLoggedIn,recordController.getByStd)
app.get('/record/game/:id',authMiddleware.notLoggedIn, recordController.getByGame)
app.get('/record/date/:id', authMiddleware.notLoggedIn,recordController.getByDate)
app.post('/record', authMiddleware.notLoggedIn,recordController.post)
app.put('/record/:id',authMiddleware.notLoggedIn, recordController.put)
app.delete('/record/:id', authMiddleware.notLoggedIn, recordController.del)

app.use('*', (req, res) => { res.send("ERROR 404: Endpoint not found") })

app.listen(port, () => {
    console.log(`SIIT Tabletop Club backend is hosting on http://localhost:${port}`)
})