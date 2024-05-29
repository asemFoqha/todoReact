interface Props {
  todo: Todo;
  deleteTodo: (id: number) => void;
  togelTodo: (id: number) => void;
}

const TodoItem = ({ todo, deleteTodo, togelTodo }: Props) => {
  return (
    <div className="todoitem">
      <div>
        <input
          type="checkbox"
          checked={todo.finished}
          onChange={() => togelTodo(todo.id)}
        />
        <span className={todo.finished ? "finished" : ""}>{todo.text}</span>
      </div>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};
export default TodoItem;
