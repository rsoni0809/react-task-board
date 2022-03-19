export interface TodoType {
    id: number,
    todoText: string,
    isDone: boolean;
}

export interface InputFieldPropsType {
  todo: string,
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleAddTodo: (e: React.FormEvent) => void;
}

export interface TodoListPropType {
  todoList: TodoType[],
  setTodoList: React.Dispatch<React.SetStateAction<TodoType[]>>
}
