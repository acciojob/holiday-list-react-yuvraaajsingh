import React from 'react'

function List({name, country}) {
  return (
    <div>
        <ol>
            <li>{name}</li>
            <li>{country}</li>
        </ol>
    </div>
  )
}

export default List