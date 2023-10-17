import './App.css';
import React, { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom'
import Cars from './pages/Cars'
import CreateCar from './pages/CreateCar'
import EditCar from './pages/EditCar'
import CarDetails from './pages/CarDetails'
import PageNotFound from './pages/PageNotFound'
import { Link } from 'react-router-dom'


const App = () => {
  
  const [cars, setCars] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchCars = async () => {
      const response = await fetch('http://localhost:3001/cars')
      const data = await response.json()
      setCars(data)
      setTotal(calculateTotalPrice(data))
    }
    fetchCars()
  }, []);

  function calculateTotalPrice(cars) {
    if (!cars) return 0;
    return cars.reduce((total, car) => total + car.price, 0);
  };


  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<Cars data={cars}/>
    },
    {
      path:"/car/:id",
      element: <CarDetails data={cars} />
    },
    {
      path: '/new',
      element: <CreateCar />
    },
    {
      path: '/edit/:id',
      element: <EditCar data={cars} />
    },
    {
      path:"/*",
      element: <PageNotFound />
    }
  ]);

  
  return ( 

    <div className="App">

      <header>
        <div className="header-container">
          <div className="header-left">
            <h1>Chelsea's Cars</h1>
          </div>
          <div className="header-right">
            <Link to="/"><button className="homeBtn">Home</button></Link>
            <Link to='/new'><button className='addBtn'>+ Add Car</button></Link>
          </div>
        </div>
      </header>
        <h2>Total Price: ${total}</h2>
        {element}
        
    </div>

  );
}

export default App;