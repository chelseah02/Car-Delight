import { useState } from 'react'
import './CreateCar.css'

const CreateCar = () => {

    const date = new Date()
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    let currentDate = year + '-' + month + '-' + day

    const [car, setCar] = useState({
        id: 0,
        price: 0,
        color: '',
        model: '',
        year: '',
        make: '',
        image: ''
    })
    
    const handleChange = (event) => {
        const { name, value } = event.target

        setCar( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }
    
    const createCar = (event) => {
        event.preventDefault()

        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(gift),
        }

        fetch('http://localhost:3001/cars', options)
        window.location = '/'
    }

    return (
        <div className='CreateGift'>
            <center><h2>Add a Car</h2></center>
            <form>
                <label>Make</label> <br />
                <input type='text' id='name' name='name' value={car.make} onChange={handleChange} /><br />
                <br/>

                <label>Model</label><br />
                <input type='text' id='description' name='model' value={car.model} onChange={handleChange} ></input>
                <br/>

                <label>Year</label><br />
                <input type='text' id='year' name='year' value={car.year} onChange={handleChange} /><br />
                <br/>

                <label>Price</label><br />
                <input type='number' step='0.1' id='price' name='price' value={car.price} onChange={handleChange} /><br />
                <br/>

                <label>Color</label><br />
                <input type='text' id='color' name='color' value={car.color} onChange={handleChange} /><br />
                <br/>
                
                <label>Image URL</label><br />
                <input type='text' id='image' name='image' value={car.image} onChange={handleChange} /><br />
                <br/>

                <input type='submit' value='Submit' onClick={createCar} />
            </form>
        </div>
    )
}

export default CreateCar
