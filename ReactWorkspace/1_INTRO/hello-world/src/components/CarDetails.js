import React from 'react'

const CarDetails = ({brand ,km ,color, newCar}) => {
  return (
    <div>
    <h2>Details the car</h2>
    <ul>
        <li>brand: {brand}</li>
        <li>km:{km}</li>
        <li>color:{km}</li>
        {newCar && <li>Carro novo</li>}
    </ul>
        
    </div>
  );
}

export default CarDetails