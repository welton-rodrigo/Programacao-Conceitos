
const ExecuteFunction = ({myFunction}) => {
  return (
    //sem o parentes porque quero que execute quando houver a action de click, se colocar os () executara no carregamento
    <button onClick={myFunction}> click aqui para executar a função</button>
  )
}

export default ExecuteFunction