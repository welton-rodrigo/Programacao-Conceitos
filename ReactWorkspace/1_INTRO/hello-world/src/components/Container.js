

const Container = ({children, myValue}) => {
  return (
    <div>
        <h2>este é o titulo do container </h2>
        {children}
        <p>o valor da propriedade é:{myValue}</p>
    </div>
  )
}

export default Container