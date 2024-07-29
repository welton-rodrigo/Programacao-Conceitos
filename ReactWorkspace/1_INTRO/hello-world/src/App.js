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

  return (
    <>
     <CarDetails brand="VM" km={10000} color="blue" />
     {/*Reaproveitando */}
     <CarDetails brand="ford" km={300} color="black" />
     <CarDetails brand="Chevrolet" km={200} color="branco" newCar={true} />
    </>
  );
}

export default App;
