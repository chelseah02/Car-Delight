import { pool } from '../config/database.js'

const getCars = async (req, res) => {
  try {
    const results = await pool.query('SELECT * FROM cars ORDER BY id ASC')
    res.status(200).json(results.rows)
  } catch (error) {
    res.status(400).json( { error: error.message } )
  }
}

const getCarById = async (req, res) => {
  try {
    console.log("In here!")
    const carId = req.params.carId
    const selectQuery = `SELECT price, color, model, year, make, image FROM cars WHERE id = ${carId}`
    const results = await pool.query(selectQuery)

    res.status(200).json(results.rows[0])
  } catch (error) {
    res.status(409).json( { error: error.message } )
  }
}

const createCar = async (req, res) => {
  try {
    const { price, color, model, year, make, image } = req.body // TK???????
    const results = await pool.query(`
      INSERT INTO cars (price, color, model, year, make, image)
      VALUES($1, $2, $3, $4, $5, $6)
      RETURNING *`,
      [price, color, model, year, make, image]
    )
    res.status(201).json(results.rows[0])
  } catch (error) {
    res.status(409).json( { error: error.message } )
  }
}

const updateCar = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const { price, color, model, year, make, image } = req.body // TK???????
    const results = await pool.query(`
      UPDATE cars SET price = $1, color = $2, model = $3, year = $4, make = $5, image = $6 WHERE id = $7`,
      [price, color, model, year, make, image, id]
    )
    res.status(200).json(results.rows[0])
  } catch (error) {
    res.status(409).json( { error: error.message } )
  }
}

const deleteCar = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const results = await pool.query('DELETE FROM cars WHERE id = $1', [id])
    res.status(200).json(results.rows[0])
  } catch (error) {
    res.status(409).json( { error: error.message } )
  }
}

export default {
  getCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar
}
