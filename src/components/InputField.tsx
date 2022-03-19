import React, { useRef} from 'react';
import './styles.css';
import { InputFieldPropsType} from "./model";


const InputField: React.FunctionComponent<InputFieldPropsType> = ({ todo, setTodo, handleAddTodo } ) => {
  console.log(todo);
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className='input' onSubmit={(e) => {
      handleAddTodo(e);
      inputRef.current?.blur();
      }}>
      <input
        ref={ inputRef}
        type='input'
        value={todo}
        className="input__box"
        placeholder="Enter task in task board"
        onChange={ (e) =>setTodo(e.target.value)}
      />
      <button className="input__button" type="submit" > Go</button>
    </form>
  )
}

export default InputField