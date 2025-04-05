import React, { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import PokemonCard from '../shared/PokemonCard';
import SearchBar from '../shared/SearchBar';
import Pagination from '../shared/Pagination';

const POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
const ITEMS_PER_PAGE = 15;

const Home = () => {
  const { data, isLoading, error } = useFetch(POKEMON_URL);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const pokemons = data?.results || [];

  const filtered = pokemons.filter(pokemon =>
    pokemon.name.includes(searchTerm.toLowerCase())
  );

  //liczba stron:
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  // 1-sza strona: indeksy 0 - 14 -> (1-1) * 15 = 0 start
  // 2-ga strona: indeksy 15 - 29 -> (2-1) * 15 = 15  start

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  // slice(beginIdx, endIdx) -> zwraca nowy ciąg określony przez beginIdx i endIdx

  const paginatedPokemons = filtered.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="flex flex-col items-center">
      <section>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </section>

      <section className="flex flex-wrap justify-center gap-8">
        {/* Jak starczy czasu zrobić komponent z ładnym loaderem */}
        {isLoading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        {/* 
        {filtered.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemonUrl={pokemon.url} />
        ))} */}

        {paginatedPokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemonUrl={pokemon.url} />
        ))}
      </section>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      {/* <section className="flex justify-center gap-2 mt-4">
        {Array.from({ length: totalPages }, (el, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 border rounded-full cursor-pointer ${
              currentPage === i + 1 ? 'bg-blue-500 text-white' : ''
            }`}
          >
            {i + 1}
          </button>
        ))}
      </section> */}
    </div>
  );
};

export default Home;
