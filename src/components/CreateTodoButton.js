import React from 'react'
import '../styles/CreateTodoButton.css'

function CreateTodoButton( { setOpenModal}) {
    return (
    <button
        onClick={()=>{
            setOpenModal (state => !state)
        }}
    >+</button>
    )
}

export {CreateTodoButton}