import React from "react"
import { TodoContext } from '../context/TodoContext.js'
import '../styles/TodoCounter.css';

const TodoCounter = ()=>{

    const { completedTodos, totalTodos,} = React.useContext(TodoContext)

    return(
        totalTodos === completedTodos ?

            <h1 className="TodoCounter">
                Felicidades, No tienes tareas pendientes!! 🥳🎉✨ 
                Puedes agregar una nueva
            </h1>

        : 

            <h1 className="TodoCounter">
                Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS
            </h1>
    )
}

export {TodoCounter}