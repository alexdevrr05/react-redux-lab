import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementBy } from './store/slices/counter';

function App() {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Vite + React</h1>
      <h2>count is: {counter}</h2>
      <button type='button' onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button type='button' onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <button type='button' onClick={() => dispatch(incrementBy(2))}>
        Increment by 2
      </button>
    </>
  );
}

export default App;
