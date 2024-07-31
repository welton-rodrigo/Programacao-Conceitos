import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  return (
    
    <div className="App">
      {/*CSS GLOBAL */}
      <h1>React com CSS</h1>
      {/*CSS DE COMPONENTE */}
      <MyComponent />
      <p className='my-comp-paragraph'>Este e o paragrafo do app</p>

    </div>
  );
}

export default App;
