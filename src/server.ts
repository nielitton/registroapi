import express from 'express'
import { router } from './routes/index'
import bodyParser from 'body-parser'

const app = express()

app.use(express.json())
app.use(router)

app.listen(3333, () => console.log("Server is running on port 3333"))