import React from 'react'
import CarSummary from './CarSummary'

const CarList = () =>{
    return(
        <div className="car-list section">
            <CarSummary/>
            <CarSummary/>
            <CarSummary/>
        </div>
        
    )
}

export default CarList