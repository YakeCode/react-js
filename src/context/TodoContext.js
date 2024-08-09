import React from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage';

const TodoContext = React.createContext()

function TodoProvider({children}){

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []); // El hook customizado maneja el almacenamiento local
    
      const [searchValue, setSearchValue] = React.useState(''); // Valor inicial del estado
    
      //_______________________________________________________________________________
      // Cuantos han sido completados
        const completedTodos = todos.filter(todo => !!todo.completed).length;
    
      // Todos Totales
        const totalTodos = todos.length;
    
      // Filtrar todos______________________________________________________________
        const searchedTodos = todos.filter((todo) => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        });
    
      // Completar TODO____________________________________________________________
        const completeTodo = (text) => {
            const newTodos = [...todos];
            const todoIndex = newTodos.findIndex((todo) => todo.text === text);
            newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
            saveTodos(newTodos); // Guardar los cambios en el localStorage
        };
    
      // Eliminar TODO______________________________________________________________
        const deleteTodo = (text) => {
            const newTodos = [...todos];
            const todoIndex = newTodos.findIndex((todo) => todo.text === text);
            newTodos.splice(todoIndex, 1);
            saveTodos(newTodos); // Guardar los cambios en el localStorage
        };

    return (
        <TodoContext.Provider 
        
        value={
            {
                loading,
                error,
                completedTodos,
                totalTodos,
                searchValue,
                setSearchValue,
                searchedTodos,
                completeTodo,
                deleteTodo,
            }
        }>

        {children}

        </TodoContext.Provider>
    )
}





export { TodoContext, TodoProvider}