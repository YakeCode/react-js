import React from "react"
import '../styles/TodoCounter.css';

const TodoCounter = ({completed,total})=>{

    return(
        total === completed ?

            <h1 className="TodoCounter">
                Felicidades, No tienes tareas pendientes!! 🥳🎉✨ 
                Puedes agregar una nueva
            </h1>

        :

            <h1 className="TodoCounter">
                Has completado <span>{completed}</span> de <span>{total}</span> TODOS
            </h1>
    )
}

export {TodoCounter}