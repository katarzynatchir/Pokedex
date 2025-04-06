import React, { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import PokemonModal from './PokemonModal';
import PokemonFeatures from './PokemonFeatures';
import { capitalize, formatAbilities } from '../../utils/format';

const PokemonCard = ({ pokemonUrl }) => {
  const { data, isLoading, error } = useFetch(pokemonUrl);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // TODO: zrobić komponenty Loader i Error
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return null; // Na wypadek, gdyby data była nadal null

  //Nazwa z dużej litery - sprawdź czy jest inny sposób??
  //jeżeli będzie e innych komponentach to wyodrębnić -> utils? - chyba OK

  const pokemonData = {
    id: data.id,
    // name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
    name: capitalize(data.name),
    imgUrl: data.sprites.front_default,
    height: data.height,
    weight: data.weight,
    experience: data.base_experience,
    abilities: formatAbilities(data.abilities),
  };

  return (
    <>
      {/* Pokemon card */}
      <div
        onClick={() => setIsModalOpen(true)}
        className="bg-white dark:bg-neutral-800 w-[300px] rounded-2xl border border-gray-200 shadow-lg p-4 transition-transform hover:scale-105 cursor-pointer flex flex-col items-center"
      >
        <img
          src={pokemonData.imgUrl}
          alt={pokemonData.name}
          className="w-24 object-contain"
        />
        <h2 className="text-3xl font-bold mb-2">{pokemonData.name}</h2>
        <p>{pokemonData.id}</p>

        <PokemonFeatures
          height={pokemonData.height}
          weight={pokemonData.weight}
          experience={pokemonData.experience}
          ability={pokemonData.abilities}
        />
      </div>

      {/* Pokemon Modal */}
      {isModalOpen && (
        <PokemonModal
          handleCloseModal={() => setIsModalOpen(false)}
          {...pokemonData}
        />
      )}
    </>
  );
};

export default PokemonCard;
