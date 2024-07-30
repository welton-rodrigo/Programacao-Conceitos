import logo from './logo.svg';
import './App.css';
import first from './components/FirstComponent'
import FirstComponent from './components/FirstComponent';
import MyComponent from './components/MyComponent';
import Events from './components/Events';
import Challenge from './components/Challenge';
import City from "./assets/teste.jpg";
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import Experiencia from './components/Experiencia';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import { useState } from 'react';
import CarDetails from './components/CarDetails';
function App() {
  const [name] = useState("welton 2");

  const car = [
    {id:1, brand: "ferrari", color: "vermelha", newCar: true, km: 1},
    {id:2, brand: "gol", color: "prata", newCar: false, km: 130.000},
    {id:3, brand: "uno", color: "cinza", newCar: false, km: 199.000},
    {id:4, brand: "kia", color: "amarelo", newCar: true, km: 1},
  ]

  return (
    <>
 
     {/**loop em arrays de objetos */}
     {car.map((car) => (
      <CarDetails brand={car.brand} color={car.color} newCar={car.newCar} km={car.km} />
     ))}
    </>
  );
}

export default App;
