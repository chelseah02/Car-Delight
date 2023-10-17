import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './EditCar.css'

const EditCar = () => {

    const { id } = useParams()
    const [car, setCar] = useState({
        id: 0,
        price: 0,
        color: '',
        model: '',
        year: '',
        make: '',
        image: '',
    })

    useEffect(() => {
        const fetchCarById = async () => {
            const response = await fetch(`/cars/${id}`)
            const data = await response.json()
            setCar(data)
        }

        fetchCarById()
    }, [id])

    const handleChange = (event) => {
        const { name, value } = event.target

        setCar((prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }
    
    const updateCar = (event) => {
        event.preventDefault()

        const options = {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(car),
        }

        fetch(`http://localhost:3001/cars/${id}`, options)
        window.location = '/'
    }

    const deleteCar = (event) => {
        event.preventDefault()

        const options = {
            method: 'DELETE'
        }

        fetch(`http://localhost:3001/cars/${id}`, options)
        window.location = '/'
    }

    return (
        <div className='EditCar'>
            <form>
                <label>Make</label> <br />
                <input type='text' id='make' name='make' value={car.make} onChange={handleChange} /><br />
                <br/>

                <label>Model</label> <br />
                <input type='text' id='model' name='model' value={car.model} onChange={handleChange} /><br />
                <br/>

                <label>Price</label><br />
                <input type='number' step='0.1' id='price' name='price' value={car.price} onChange={handleChange} /><br />
                <br/>

                <label>Color </label><br />
                <input type="text" id='color' name='color' value={car.color} onChange={handleChange}/><br />
                <br/>

                <label>Year</label><br />
                <input type='text' id='year' name='year' value={car.year} onChange={handleChange} /><br />
                <br/>

                <label>Image URL</label><br />
                <input type='text' id='image' name='image' value={car.image} onChange={handleChange} /><br />
                <br/>

                <input className='submitButton' type='submit' value='Submit' onClick={updateCar} />
                <button className='deleteButton' onClick={deleteCar}>Delete</button>
            </form>
        </div>
    )
}

export default EditCar
