import {
  setPokemons,
  startLoadingPokemons,
  finishLoadingPokemons,
} from './PokemonSlice';

import pokemonApi from '../../../api/pokemonApi';

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    // realizar peticion http
    const { data } = await pokemonApi.get(
      `/pokemon?limit=10&offset=${page * 10}`
    );
    dispatch(finishLoadingPokemons());
    if (data.results.length <= 0) return;

    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
  };
};
