import React from 'react';
import './TodoForm.css';
import { TodoContext } from '../../context/TodoContext';

function TodoForm() {
    const { setOpenModal,addTodo } = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                placeholder='Aprobar el curso'
                value={newTodoValue}
                onChange={onChange}
            />

            <div className='TodoForm-buttonContainer'>
                <button
                    className='TodoFormButton--cancel'
                    type='button'
                    onClick={onCancel}
                >
                    Cancelar
                </button>

                <button
                    className='TodoFormButton--add'
                    type='submit'
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export { TodoForm };



/*function TodoForm() {
    const { setOpenModal, addTodo,} = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState ('')

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false);
    }

    const onChange = (event)=>{
        setNewTodoValue(event.target.value)
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onAddTodo = () => {
        setOpenModal(false);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea 
                placeholder='Aprobar el curso' 
                value = {newTodoValue}
                onChange = {onChange}
            />

            <div className='TodoForm-buttonContainer'>
                <button
                    className='TodoFormButton--cancel'
                    type='button'
                    onClick={onCancel}
                >
                    Cancelar
                </button>

                <button
                    className='TodoFormButton--add'
                    type='submit'
                    onClick={onAddTodo}
                >
Añadir</button></div></form>);}
export{TodoForm};*/
