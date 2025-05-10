import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { router } from './routes/api-routes'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', router)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running in port: ${PORT}`))