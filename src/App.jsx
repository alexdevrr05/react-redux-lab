import { useDispatch, useSelector } from 'react-redux';
import { increment } from './store/slices/counter';

function App() {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Vite + React</h1>
      <button type='button' onClick={() => dispatch(increment())}>
        count is: {counter}
      </button>
    </>
  );
}

export default App;
