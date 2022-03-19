import React, { useState} from 'react';
import { TodoType } from "./model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import TodoList from './TodoList';

type SingleToDoType = {
    todo: TodoType,
    todoList: TodoType[],
    setTodoList: React.Dispatch<React.SetStateAction<TodoType[]>>
}

const SingleToDo: React.FunctionComponent<SingleToDoType> = ({ setTodoList, todoList, todo }) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>("")

    const handleDone = (id: number) => {
        setTodoList(
            todoList.map((todo) =>
                (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
        )
    };
    const handleDelete = (id: number) => {
        setTodoList(
            todoList.filter((todo) =>(todo.id !== id )))
    };

    const handleEdit = (e: React.FormEvent, todo: TodoType) => {
        if (!edit && !todo.isDone) {
            setEdit(!edit);
        }
    }
    const handleEditTextSubmit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
    }


    
    return (
        <form className="todos__single" onSubmit={ (e) => handleEditTextSubmit(e, todo.id)}>
            {
                edit ? (
                    <input className="todos_single--text" value={editTodo} onChange={(e) => setEditTodo(e.target.value)} />
                ): todo.isDone ? (
                    <s className="todos_single--text">{ todo.todoText}</s>
                ) : (
                    <span className="todos_single--text">{ todo.todoText}</span>
                )
            }
            <div>
                <span className="icon"onClick={ (e) => handleEdit(e, todo)} ><AiFillEdit/></ span>
                <span className="icon" onClick={ () => handleDelete(todo.id)}><AiFillDelete /></span>
                <span className="icon" onClick={ () => handleDone(todo.id)}><MdDone /></span>
                
            </div>
        </form>
        )
}

export default SingleToDo