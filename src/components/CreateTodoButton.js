import React from 'react'
import '../styles/CreateTodoButton.css'

function CreateTodoButton() {
    return (
    <button
        onClick={()=>{
            console.log(`diste click a añadir todo button`)
        }}
    >+</button>
    )
}

export {CreateTodoButton}