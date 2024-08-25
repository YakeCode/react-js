import React from 'react'
import '../styles/TodoSearch.css'
import { TodoContext } from '../context/TodoContext.js'

function TodoSearch() {

    const {searchValue, setSearchValue, } = React.useContext(TodoContext)

    console.log(searchValue)
    
    return (
        <input id='#TodoSearch' className='TodoSearch' placeholder='Tarea por hacer'

        value={searchValue} //estado actual

        onChange={(event)=>{setSearchValue (event.target.value); // la funcion recibe los parametros y actualiza 
        }} //dice que estan escribiendo en el input
        />
    )
}

export  {TodoSearch}

