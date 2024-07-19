import React from 'react';
import './App.css';
import {TodoCounter} from './components/TodoCounter'
import { TodoItem } from './components/TodoItem';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { CreateTodoButton } from './components/CreateTodoButton';
import { useLocalStorage } from './hooks/useLocalStorage';

/*const defaultTodos = [
  {text:'cortar cebolla',completed:false},
  {text:'tomar curso de react',completed:true},
  {text:'tomar curso manipulacion de arrays',completed:false},
  {text:'completar cuurso 2 de react',completed:true},
  {text:'completar cuurso 2 de react2',completed:true},
];

localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))*/
//localStorage.removeItem('TODOS_v1')


function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);

  const [searchValue,setSearchValue] = React.useState('');// ('') valor inicial del estado

//_______________________________________________________________________________
//  cuantos han sido completados
  const completedTodos = todos.filter(
    todo => !!todo.completed).length;
  
//  Todos Totales
  const totalTodos = todos.length;

  //filtrar todos_____________________________________________
  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );

  //completar TODO____________________________________________________________
  const completeTodo = (text)=>{
    const newTodos= [...todos]
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = 
      newTodos[todoIndex].completed ? false : true
      saveTodos(newTodos);
  }

  // eliminar TODO________________________________________________________________
  const deleteTodo = (text)=>{
    const newTodos= [...todos]
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos);
  }

  console.log(searchValue);


  return (
    <React.Fragment>
      {/*dentro del todo counter podemos poner de donde estamos sacando los props definidos por el nombre mas el de donde va haver la iteracion*/}

    <TodoCounter 
      completed={completedTodos}
      total={totalTodos}/>
    <TodoSearch
      searchValue ={searchValue}
      setSearchValue = {setSearchValue}
    />
    <TodoList>
        {searchedTodos.map(todo => ( // se utiliza la funcion searched todos porque el POR DEFECTO me va a renderizar todos los todos que hayan, pero a la hora de utilkizar el buscador, solo me rendizara los que me generen coincidencias con el buscador
          <TodoItem
            key={`${todo.length}+${todo.text}`}
            text={todo.text}
            completed={todo.completed}
            onComplete = {()=>completeTodo(todo.text)}
            onDelete = {()=>deleteTodo(todo.text)}
          />
      ))}
    </TodoList>

    <CreateTodoButton/>
    </React.Fragment>
  );
};


export default App;
