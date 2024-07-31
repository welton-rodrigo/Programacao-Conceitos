import React from 'react'

const UserDetails = ({nome, idade, profissao, carteira}) => {
  return (
    <>
    <div>
        <h2>Detalhes users</h2>
        <ul>
            <li>Nome: {nome}</li>
            <li>Idade: {idade}</li>
            <li>profissao: {profissao}</li>
             {carteira && <li>Habilitado para CNH</li>}
        </ul>
    </div>
    </>
  )
}

export default UserDetails