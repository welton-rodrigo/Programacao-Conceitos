import React, { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["welton", "gabriel","joao"])
    const [users] = useState([
      {id:23123145, name: "welton", age: 37},
      {id:23123145, name: "Joao", age: 12},
      {id:23123145, name: "MAria", age: 50},
      {id:23123145, name: "Ricardo", age: 60}
    ]
    )
  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
          {users.map((user) => (
              <li key={user.id}>
                  {user.name} - {user.age}
              </li>
          ))}
        </ul>
    </div>
  )
}

export default ListRender