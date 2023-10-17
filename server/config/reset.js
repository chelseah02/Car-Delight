import { pool } from '../config/database.js'
import '../config/dotenv.js'
import carData from '../data/cars.js'

const createCarsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS cars;

    CREATE TABLE IF NOT EXISTS cars (
      id SERIAL PRIMARY KEY,
      price FLOAT(10) NOT NULL,
      color VARCHAR(255) NOT NULL,
      model VARCHAR(255) NOT NULL,
      year VARCHAR(255) NOT NULL,
      make VARCHAR(255) NOT NULL,
      image VARCHAR(255) NOT NULL
    )
  `

  try {
    await pool.query(createTableQuery)
    console.log('🎉 cars table created successfully')
  } catch (err) {
    console.error('⚠️ error creating cars table', err)
  }
}

const seedCarsTable = async () => {
  await createCarsTable()

  carData.forEach((car) => {
    const insertQuery = {
      text: 'INSERT INTO cars (price, color, model, year, make, image) VALUES ($1, $2, $3, $4, $5, $6)'
    }

    const values = [
      car.price,
      car.color,
      car.model,
      car.year,
      car.make,
      car.image,
    ]

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error('⚠️ error inserting car', err)
        return
      }
      console.log(`✅ ${car.model} added successfully`)
    })
  })
}

seedCarsTable()
