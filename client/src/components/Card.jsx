import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Card.css'
import more from './more.png'

const Card = (props) => { 
    
    const [car, setCar] = useState({id: 0, price: 0, color: "", model: "", year: "", make: "", image: ""})

    useEffect(() => {
        setCar({id: props.id, price: props.price, color: props.color, model: props.model, year: props.year, make: props.make, image: props.image});
    }, [props]);

    const cardStyle = {
        backgroundColor: props.color,
    };

    const handleDelete = (event) => {
        event.preventDefault()
        deleteCar(car.id);
    }
    const deleteCar = (id) => {

        const options = {
            method: 'DELETE'
        }

        fetch(`http://localhost:3001/cars/${id}`, options)
        window.location = '/'
    }

    return (
        <div className="card" style={cardStyle}>
            <div className='top-container' style={{ backgroundImage:`url(${car.image})`}}>
                <Link to={'/edit/' + car.id}><img src={more} /></Link>
                <button className='deleteButton' onClick={handleDelete} style={{width: '10%', margin: 'auto'}}>X</button>
            </div>
            <div className='bottom-container'>
                <h3>{car.make + ' ' + car.model}</h3>
                <p>{'Price: ' + car.price}</p>
                <p>{'Released: ' + car.year}</p>
                <p>{'Color: ' + car.color}</p>
                <Link to={'/car/' + car.id}><a>Read More or Edit →</a></Link>
            </div>
        </div>
    )
}

export default Card