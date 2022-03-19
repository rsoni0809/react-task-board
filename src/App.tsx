import React, { useState, useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from "./components/InputField";
import { TodoType } from "./components/model";
import TodoList from "./components/TodoList";


let name: string;
let age: string | number;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];
role = [2, "rahul"];

type Person = {
  name: string,
  age?: number
}

let printName: (name: string) => never;




let personName: unknown;

let peopleGroup: Person[];
 peopleGroup = [{ name: "rahul" }, { name: "anand", age: 12 }];

interface peopleList  {
  name: string,
  age: number
}

peopleGroup = [{ name: "rahul" }, { name: "anand", age: 12 }];

let person: Person = {
  name: "Rahul",
  age: 34
}



const App: React.FunctionComponent = () => {
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<TodoType[]>([]);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    setTodoList([...todoList, { id: Date.now(), todoText: todo, isDone: false }]);
    setTodo("");
    console.log(todoList);
  }
  return (
    <div className="App">
      <span className="heading">Story Board</span>
      <InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
      <TodoList todoList={todoList} setTodoList={setTodoList}/>
    </div>
  );
}

export default App;
