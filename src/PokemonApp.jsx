import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon';

const PokemonApp = () => {
  const dispatch = useDispatch();

  const { isLoading, page, pokemons } = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons(0));
  }, []);

  return (
    <div>
      <h1>PokemonApp</h1>

      {isLoading && <span>Loadinig...</span>}

      <ul>
        {pokemons.map(({ name }) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>
      <button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>
        Next
      </button>
    </div>
  );
};

export default PokemonApp;
