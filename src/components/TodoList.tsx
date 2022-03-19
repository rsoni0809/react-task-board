import React from 'react'
import "./styles.css";
import { TodoListPropType } from "./model";
import SingleToDo from "./SingleToDo";

const TodoList: React.FunctionComponent<TodoListPropType> = ({  todoList, setTodoList }) => {
  return (
      <div className="todos">
          {
              todoList.map((todo) => (
                  <SingleToDo
                      todo={todo}
                      key={todo.id}
                      todoList={todoList}
                      setTodoList = {setTodoList}

                  />
              ))
          }
      </div>
  )
}

export default TodoList