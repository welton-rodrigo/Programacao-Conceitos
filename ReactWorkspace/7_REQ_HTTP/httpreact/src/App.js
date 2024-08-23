import './App.css';

import {useState, useEffect} from "react";
// 4 - custom hook
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products"

function App() {
  //locais pra salvar os dados
  const [products, setProducts] = useState([]);

  //5 - refatorando post
  const [config, setConfig] = useState(null)
  const [method, setMethod] = useState(null)
  const [callFetch, setCallFetch] = useState(false)
  


  //4 -custom
  const { data: items } = useFetch(url);


  const [name, setName] = useState([]);
  const [price, setPrice] = useState([]);
  
  //1 - resgatando dados
  //chamada asyncrona 
 // useEffect(() =>{
    
   // async function fetchData(){
    
   // const res = await fetch(url)

    //transformando em json object
    //const data = await res.json()

    //setProducts(data)
  //}
  
  //fetchData();
  //}, []);


  // 2 add produtos
  const handleSubmit = async (e) => {
    e.preventDefault() //para nao submeter formulario

    const product = {
      name,  //quando o vamor tem o mesmo nome da chave não precisamos colocar name: name 
      price, 
    };

    console.log(product);
    const res  = await fetch("http://localhost:3000/products", {
      method: 'POST',
      headers: {
        "Content-Type" : "application/Json",
      },
      body: JSON.stringify(product),
    });

    // 3 - carregamento dinamico
    const addedProduct = await res.json()

    setProducts((prevProducts) => [...prevProducts, addedProduct]);

    //limpeza dos inputs
    setName("")
    setPrice("")




  };


  return (
    <div className="App">
        <h1>Lista de Produtos</h1>
      <ul>
        {items && items.map((product) => (
          <li key={product.id}>{product.name} - R$: {product.price}</li>
        ))}
      </ul>

        <div className='add-product'>
          <form onSubmit={handleSubmit}>
            <label>
              Nome:
              <input type="text" value={name} name='name' onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
              Preço:
              <input type="number" value={price} name='price' onChange={(e) => setPrice(e.target.value)} />
            </label>
            <input type="submit" value="Criar" />
          </form>
        </div>

    </div>
  );
}

export default App;
