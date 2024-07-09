import React from 'react'
import '../styles/TodoList.css'

function TodoList({children}) {
    return (
        <ul>
            {children}
        </ul>
    )
}

export  {TodoList}