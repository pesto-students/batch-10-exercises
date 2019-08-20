import {
  REQUEST_POKEMONS,
  RECEIVE_POKEMONS,
  FILTER_POKEMONS,
} from '../constants/Page';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

function requestPokemons() {
  return {
    type: REQUEST_POKEMONS,
  };
}

function receivePokemons(json) {
  const pokemons = json.results.map((_pokemon) => {
    const { url } = _pokemon;
    const pokemon = _pokemon;
    pokemon.id = url.substring(34, url.length - 1);
    return pokemon;
  });

  return {
    type: RECEIVE_POKEMONS,
    pokemons,
  };
}

export function filterPokemons(searchTerm) {
  return (dispatch, getState) => {
    const displayedPokemons = getState()
      .page.pokemons.filter((pokemon) => {
        return pokemon.name.includes(searchTerm.toLowerCase());
      })
      .slice(0, 60);

    dispatch({
      type: FILTER_POKEMONS,
      displayedPokemons,
    });
  };
}

export function fetchPokemons() {
  return (dispatch) => {
    dispatch(requestPokemons());

    return fetch(`${BASE_URL}/?limit=784`)
      .then(response => response.json())
      .then((json) => {
        dispatch(receivePokemons(json));
        dispatch(filterPokemons(''));
      });
  };
}
