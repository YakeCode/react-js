import React from 'react'

import {TodoCounter} from './components/TodoCounter';
import { TodoItem } from './components/TodoItem';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodosLoading } from './components/TodosLoading';
import { TodosError } from './components/TodosError';
import { EmptyTodos } from './components/EmptyTodos';
import { TodoContext } from './context/TodoContext';



function AppUI(

) {
  return (
    <React.Fragment>
      {/* dentro del TodoCounter podemos poner de donde estamos sacando los props definidos por el nombre más el de donde va a haber la iteración */}
      
      <TodoCounter /*completed={completedTodos} total={totalTodos} *//>
      <TodoSearch /*searchValue={searchValue} setSearchValue={setSearchValue}*/ />
      <TodoContext.Consumer>
        {
          ({
            loading,
            error,
            searchedTodos,
            completeTodo,
            deleteTodo
          })=>(
            <TodoList>

              {loading && <TodosLoading />}
              {error && <TodosError />}
              {(!loading && searchedTodos.length === 0) && <EmptyTodos />}
              {searchedTodos.map((todo) => (

          // Se utiliza la función `searchedTodos` porque, por defecto, me va a renderizar todos los `todos` que haya. Pero a la hora de utilizar el buscador, solo me renderizará los que generen coincidencias con el buscador.

                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                />
              ))}
            </TodoList>
          )
        }
      </TodoContext.Consumer>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };