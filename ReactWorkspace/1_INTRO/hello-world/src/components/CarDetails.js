import React from 'react'

const CarDetails = ({brand ,color ,newcar, km, newCar}) => {
  return (
    <>
   
    <div>
    <h2>details cars</h2>
    <ul>
        <li>brand: {brand}</li>
        <li>km:{km}</li>
        <li>color:{color}</li>
        {newCar && <li>Carro novo</li>}
    </ul>
        
    </div>

    </>
  );
}

export default CarDetails