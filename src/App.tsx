import { useEffect, useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");

    const parsedTodos: Todo[] = savedTodos ? JSON.parse(savedTodos) : [];
    if (parsedTodos?.length > 0) setTodos(parsedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  //#region Handler

  const deleteHandle = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const togelHandle = (id: number) => {
    const newTodos = todos.map((todo) => {
      return todo.id === id ? { ...todo, finished: !todo.finished } : todo;
    });
    setTodos(newTodos);
  };

  const addTodoHandle = async (text: string) => {
    const todo: Todo = {
      id: Math.random(),
      text,
      finished: false,
    };
    setTodos([...todos, todo]);
  };

  //#endregion

  return (
    <TodoList
      todos={todos}
      addTodo={addTodoHandle}
      togelTodo={togelHandle}
      deleteTodo={deleteHandle}
    />
  );
}

export default App;
