import { useEffect, useState } from 'react';

const API_URL = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

export const useAllPokemonData = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllPokemons = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(API_URL);

        if (!response.ok)
          throw new Error('Błąd podczas pobierania listy Pokemonów');

        const data = await response.json();
        // console.log('data:', data);

        //wyciągam tylko results:
        // [{name, url}, {name, url}, ...]
        const basicList = data.results;
        // console.log('basicList:', basicList);
        //zrobić Promise.all

        const detailedRequests = basicList.map(async pokemon => {
          try {
            const res = await fetch(pokemon.url);
            if (!res.ok)
              throw new Error(`Błąd przy pobieraniu ${pokemon.name}`);
            return await res.json();
          } catch (err) {
            console.error(`❌ Błąd przy ${pokemon.name}:`, err.message);
            return null; // <--- ważne! zwracamy null, żeby nie było undefined
          }
        });

        const fullData = await Promise.all(detailedRequests);
        // const fullDataRaw = await Promise.all(detailedRequests);
        // const fullData = fullDataRaw.filter(Boolean); // usuń null'e

        setPokemonList(fullData);

        // console.log('fullData:', fullData);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllPokemons();
  }, []);

  return { pokemonList, isLoading, error };
};
