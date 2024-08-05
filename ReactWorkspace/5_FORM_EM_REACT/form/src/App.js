
import logo from './logo.svg';
import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h1>Form</h1>
     <MyForm user={{name:"welton", email: "welton@gmail.com"}}/>
    </div>
  );
}

export default App;
