import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './CarDetails.css'

const CarDetails = ({data}) => {

    const [car, setCar] = useState({id: 0, price: 0, color: "", model: "", year: "", make: "", image: ""})
    const { id } = useParams()
    console.log(id)
    useEffect(() => {
        const fetchCarById = async () => {
            const response = await fetch(`http://localhost:3001/cars/${id}`)
            const data = await response.json()
            setCar(data)
        }
        fetchCarById()
    }, [data, id]);

    const deleteCar = () => {

        const options = {
            method: 'DELETE'
        }

        fetch(`http://localhost:3001/cars/${id}`, options)
        window.location = '/'
    }

    return (
        <div className="CarDetails">
            <main id="car-content" class="car-info">
                <div class="image-container">
                    <img id="image" src={car.image} />
                </div>
                <div class="car-details">
                    <h2 id="model">{car.model}</h2>
                    <p id="make">{'Maker: ' + car.make}</p>
                    <p id="price">{'Set Price: ' + car.price}</p>
                    <p id="color">{'Color: ' + car.color}</p>
                    <p id="year">{'Released In: ' + car.year}</p>
                </div>
            </main>
            <button style={{color: "white", backgroundColor: 'green', width: '100%', height:'50px'}}><Link to={'/edit/' + car.id} style={{color: "white"}}>Edit Car</Link></button>
            <button className='deleteButton' onClick={deleteCar} style={{width: '100%', margin: 'auto'}}>Delete Car</button>
        </div>
    )
}

export default CarDetails