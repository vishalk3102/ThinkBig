import express from 'express'
import { config } from 'dotenv'
import ErrorMiddleware from './middlewares/Error.js'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import cors from 'cors'

config({ path: 'backend/config/config.env' })
// const FRONTEND_URL = process.env.FRONTEND_URL;

const app = express()

// Using Middlewares
app.use(bodyParser.json({ limit: '100mb' }))
app.use(
  bodyParser.urlencoded({
    extended: true,
    parameterLimit: 100000,
    limit: '100mb'
  })
)
app.use(cookieParser())
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
  })
)

//importing and using Routes
import course from './routes/courseRoutes.js'
import user from './routes/userRoutes.js'
import payment from './routes/paymentRoutes.js'
import other from './routes/otherRoutes.js'

app.use('/api/v1', course)
app.use('/api/v1', user)
app.use('/api/v1', payment)
app.use('/api/v1', other)

export default app

app.get('/', (req, res) => {
  res.send(`<h1>Working </h1>`)
})

app.use(ErrorMiddleware)
