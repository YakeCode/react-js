import React from 'react'
import '../styles/TodoSearch.css'

function TodoSearch({searchValue,setSearchValue}) {

    //const [state, setState] = React.useState('');
    //const[searchValue,setSearchValue] = React.useState(''); // ('') como inicia mi input

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

/*import React from 'react'
import '../styles/TodoSearch.css'

function TodoSearch({searchValue,setSearchValue}) {

    //const [state, setState] = React.useState('');
    //const[searchValue,setSearchValue] = React.useState(''); // ('') como inicia mi inputg
    
    return (
        <input id='#TodoSearch' className='TodoSearch' placeholder='Tarea por hacer'

        value={searchValue} //estado actual

        onChange={(event)=>{setSearchValue (event.target.value); // la fubncion recibe los parametros y actualiza 

        }} //dice que estan escribiendo en el input
        />
    )
}

export  {TodoSearch} */
