import React from 'react';
import './App.css';
import {TodoCounter} from './components/TodoCounter'
import { TodoItem } from './components/TodoItem';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { CreateTodoButton } from './components/CreateTodoButton';
import react from 'react';

/*const defaultTodos = [
  {text:'cortar cebolla',completed:false},
  {text:'tomar curso de react',completed:true},
  {text:'tomar curso manipulacion de arrays',completed:false},
  {text:'completar cuurso 2 de react',completed:true},
  {text:'completar cuurso 2 de react2',completed:true},
];

localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))*/
//localStorage.removeItem('TODOS_v1')



/*function useLocalStorage(itemName,initialValue){

  const localStorageItem = localStorage.getItem(itemName); // crea para guiardar en TODOS_V1

  let parsedItem;
  
  if (!localStorage){
    const localStorageNotUsed = JSON.stringify (initialValue)
    localStorage.setItem(itemName, localStorageNotUsed) 
    parsedItem = initialValue
  } else {
    parsedItem  = JSON.parse(localStorageTodos)
  }

    const [item, setItem] =React.useState ()
    
    // ACTUALIZAR EL ESTADO Y EL LOCALSTORAGE

  const saveItem = (newItem) =>  {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  };

  return [item, saveItem]

}*/

// _________ Custom Hooks___________

function useLocalStorage(itemName,initialValue){

// localStorage init___________________

  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem;

  if(!localStorageItem){
    localStorage.setItem(itemName,JSON.stringify(initialValue));
    parsedItem=initialValue;
  }else{
    parsedItem=JSON.parse(localStorageItem);
  }

// localStorage END ________________________

  const [item,setItem]=React.useState(parsedItem);

// ACTUALIZAR EL ESTADO Y EL LOCALSTORAGE

  const saveItem=(newItem)=>{
    localStorage.setItem(itemName,JSON.stringify(newItem));
    setItem(newItem);
  };

  return[item,saveItem];

};

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
