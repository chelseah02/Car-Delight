import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
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
        </div>
    )
}

export default CarDetails