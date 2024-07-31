import React from 'react'

const UserDetails = ({nome, idade, profissao }) => {
  return (
    <>
    <div>
        <h2>Detalhes users</h2>
        <ul>
            <li>Nome: {nome}</li>
            <li>Idade: {idade}</li>
            <li>profissao: {profissao}</li>
             {idade >= 18 ? (<li>Habilitado para CNH</li>) : (<li>Menor de idade</li>)}
        </ul>
    </div>
    </>
  )
}

export default UserDetails