import express from 'express'
import './config/dotenv.js'
import cors from 'cors'
import carsRouter from './routes/cars.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/cars', carsRouter)

app.get('/', (req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">Cars API</h1>')
})

const PORT = process.env.PORT || 3001
    
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})
