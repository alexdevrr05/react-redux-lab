import { useGetTodosQuery } from './store/apis';

const TodoApp = () => {
  const { isLoading, data: todos = [] } = useGetTodosQuery();

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Todos - RTK Query</h1>
      <hr />
      <p>IsLoading {isLoading ? 'true' : 'false'}</p>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.completed ? 'DONE ' : 'PENDING '}</strong>
            {todo.title}
          </li>
        ))}
      </ul>

      <button>Next Todo</button>
    </div>
  );
};

export default TodoApp;
