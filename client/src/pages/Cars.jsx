import React, { useState, useEffect } from 'react'
import './Cars.css'
import Card from '../components/Card'


const Cars = (props) => {

    const [cars, setCars] = useState([])

    useEffect(() => {
        setCars(props.data)
    }, [props])
    
    return (
        <div className="Cars">
            <main>
            {
                cars && cars.length > 0 ?
                cars.map((car,index) => 
                    
                   <Card id={car.id} 
                         
                         price={car.price} 
                         color={car.color} 
                         model={car.model}
                         year={car.year}
                         make={car.make}
                         image={car.image}  />

                ) : <h3 className="noResults">{'No Cars Yet 😞'}</h3>
            }
            </main>
        </div>  
    )
}

export default Cars