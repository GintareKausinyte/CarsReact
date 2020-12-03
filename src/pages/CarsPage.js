import React, { useState, useEffect } from 'react'
import carsApi from '../api/carsApi'
import Carousel from 'react-bootstrap/Carousel'
import './CarsPage.css'

export default () => {
    const [cars, setCars] = useState([]);
    const [list, setList] = useState(cars);
    const [isLoading, setIsLoading] = useState(true);

 
    useEffect(() => {
        carsApi.fetchCars()
            .then(response => setCars(response.data))
            .then(() => setIsLoading(false))

    }, [list]);

    return (
        <div className="container">
            {isLoading ?
                <div>Loading...</div>

                :

                <div>
                    <div className="grid-container">
                        {list.map(car => (
                            <div key={car.id} className="card">
                                <Carousel interval={null}>
                                    {(car.nuotraukos || []).map(photo =>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100 img"
                                                src={photo}

                                            />
                                        </Carousel.Item>
                                    )}</Carousel>
                                <div className="text-position">
                                    <h5>{car.marke}</h5>
                                    <p>{car.modelis}</p>
                                    <p>{car.metai}</p>
                                    <p className="price">{car.kaina}</p>
                                </div>
                            
                            </div>

                        ))}

                    </div>

                </div>
            }
            <div className="btn-position">
            <button className="btn" onClick={() => setList([...list, cars])}>Add a car</button>
            </div>
        </div>
    )

}
