const FirstComponent = () =>{

   const name = "welton";
   const data = {
    age: 31,
    job: "Programmer",
   }
    return(
            <div>
            <h1>Meu Primeiro Componente, ola {name}</h1>
            <p className='teste'></p>
            <p>qual sua profissao: {data.job}</p>
            <p>valor de uma soma: {4*2}</p>
            <p>Console log: {console.log("teste de console")}</p>
            {alert("ola ")}

           </div>
      
    );
};

export default FirstComponent;