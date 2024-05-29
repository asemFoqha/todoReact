import { useRef } from "react";
import TodoItem from "./TodoItem";

interface Props {
  todos: Todo[];
  deleteTodo: (id: number) => void;
  togelTodo: (id: number) => void;
  addTodo: (text: string) => void;
}

const TodoList = ({ todos, deleteTodo, togelTodo, addTodo }: Props) => {
  const textRef = useRef<HTMLInputElement>(null);

  const handleAdding = () => {
    if (textRef.current?.value) {
      addTodo(textRef.current?.value);

      textRef.current.value = "";
    }
  };

  return (
    <div className="todolist">
      <h1>To-Do List</h1>
      <form
        className="todolist__form"
        onSubmit={(e) => {
          e.preventDefault();
          handleAdding();
        }}
      >
        <input type="text" ref={textRef} />
        <button type="button" onClick={handleAdding}>
          Add
        </button>
      </form>
      {todos.length == 0 && <p>No Todos</p>}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          togelTodo={togelTodo}
        />
      ))}
    </div>
  );
};
export default TodoList;
