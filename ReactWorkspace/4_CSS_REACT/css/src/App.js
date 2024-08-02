import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  const n = 15;
  return (
    
    <div className="App">
      {/*CSS GLOBAL */}
      <h1>React com CSS</h1>
      {/*CSS DE COMPONENTE */}
      <MyComponent />
      <p className='my-comp-paragraph'>Este e o paragrafo do app</p>
      {/*Inline CSS*/}
      <p style={{color: "blue", padding:"25px", borderTop:"2px solid red"}}>Este elemnto foi estilizado de forma inline</p>
      {/*Inline style Dinamico*/}
      <h2 style={n > 10 ? ({color: 'green'}) : ({color: 'yellow'})}>CSS DINAMICO</h2>
    </div>
  );
}

export default App;
