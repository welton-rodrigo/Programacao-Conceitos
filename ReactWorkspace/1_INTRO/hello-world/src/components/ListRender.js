import React, { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["welton", "gabriel","joao"])
    const [users, setUsers] = useState([
      {id:1, name: "welton", age: 37},
      {id:2, name: "Joao", age: 12},
      {id:3, name: "MAria", age: 50},
      {id:4, name: "Ricardo", age: 60}
    ]
    )

    const deleteRandom = () => {
      //pegando numero aleatorio

      const randomNumber = Math.floor(Math.random() * 5);
      console.log("rando : " + randomNumber);
      setUsers((prevUsers) => {
        console.log(prevUsers);
        return prevUsers.filter((user) => randomNumber !== user.id);
      })
    }
  return (
    <div>
       
        <ul>
          {users.map((user) => (
              <li key={user.id}>
                  {user.name} - {user.age}
              </li>
          ))}
        </ul>
          <button onClick={deleteRandom}>delete random</button>
    </div>
  )
}

export default ListRender