import './MyForm.module.css';
import {useState} from 'react';
const MyForm = () => {
  //3 - gerenciamento de dados
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleName = (e) => {
    setName(e.target.value);
  };



  const handleSubmit = (event) => {
    event.preventDefault();//preventDefault faz a parada do envio tradicional do formulario
    console.log("enviando formulario");
    console.log(name, email);
  };
  return (
    <div>
      {/*5 - envio de form*/}
        {/*1 - criacao de form*/}
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="name">Nome:</label>
            <input
             type="text" 
             name="name" 
             placeholder="digite seu nome"
             onChange={handleName}
             />
            </div>
            {/*2 - Label envolvendo input*/}
            <label>
                <span>E-mail</span>
              {/*4 - simplificacao de manipulação de state*/}
                <input type="email" name="email" placeholder="digite seu email" onChange={(e) => setEmail(e.target.value)}/>
            </label>

                <input type="submit" value="enviar" />
        </form>
    </div>
  )
}

export default MyForm