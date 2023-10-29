import { useState } from 'react';
import { useGetTodoQuery, useGetTodosQuery } from './store/apis';

const TodoApp = () => {
  const [todoId, setTodoId] = useState(1);

  // const { isLoading, data: todos = [] } = useGetTodosQuery();
  const { isLoading, data: todo } = useGetTodoQuery(todoId);
  console.log(todo);

  const nextTodo = () => {
    setTodoId(todoId + 1);
  };
  const prevTodo = () => {
    if (todoId === 1) return;
    setTodoId(todoId - 1);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Todos - RTK Query</h1>
      <hr />
      <p>IsLoading {isLoading ? 'true' : 'false'}</p>

      <pre>{JSON.stringify(todo)}</pre>

      <button onClick={prevTodo}>Prev todo</button>
      <button onClick={nextTodo}>Next todo</button>

      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.completed ? 'DONE ' : 'PENDING '}</strong>
            {todo.title}
          </li>
        ))}
      </ul> */}

      {/* <button>Next Todo</button> */}
    </div>
  );
};

export default TodoApp;
